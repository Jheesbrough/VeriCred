"use client";
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { ScoreData } from '../../types/score';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

export default function Score() {
  const searchParams = useSearchParams();
  const platform = searchParams?.get('platform') || '';
  const handle = searchParams?.get('handle') || '';
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState<ScoreData['score']>(0);
  const [categories, setCategories] = useState<ScoreData['categories']>({
    network: 0,
    experience: 0,
    personal: 0,
    socialMedia: 0,
    reputation: 0,
  });

  useEffect(() => {
    if (!platform || !handle) {
      // Redirect to /get-started if platform or handle is null
      window.location.href = '/get-started';
      return;
    }

    // Simulate loading
    setTimeout(() => {
      // Fetch the score and categories from a local API
      fetch('/api/get-score')
        .then((response) => response.json())
        .then((data: ScoreData) => {
          setScore(data.score);
          setCategories(data.categories);
          setLoading(false);
        });
    }, 2000);
  }, [platform, handle]);

  const data = [
    { category: 'Network', value: categories.network },
    { category: 'Experience', value: categories.experience },
    { category: 'Personal', value: categories.personal },
    { category: 'Social Media', value: categories.socialMedia },
    { category: 'Reputation', value: categories.reputation },
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Employability Score
        </Typography>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ReactSpeedometer
                value={score}
                minValue={0}
                maxValue={100}
                segments={5}
                needleColor="steelblue"
                startColor="green"
                endColor="red"
                textColor="black"
                height={200}
              />
            </Box>
            <Typography variant="h5" component="h2" gutterBottom m={0}>
              <a href={`https://${platform}.com/${handle}`} target="_blank" rel="noopener noreferrer">
                {`https://${platform}.com/${handle}`}
              </a>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Tooltip />
                <Radar name="Score" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
}