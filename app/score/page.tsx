"use client";
import { Suspense, useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import ReactSpeedometer from 'react-d3-speedometer';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

function ScoreContent() {
  const searchParams = useSearchParams();
  const platform = searchParams?.get('platform') || '';
  const handle = searchParams?.get('handle') || '';
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [categories, setCategories] = useState({
    network: 0,
    experience: 0,
    personal: 0,
    socialMedia: 0,
    reputation: 0,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!platform || !handle) {
      window.location.href = '/get-started';
      return;
    }

    if (platform !== 'linkedin') {
      setError('Currently, only LinkedIn profiles are supported.');
      setLoading(false);
      return;
    }

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const fetchData = async () => {
      await delay(2000);

      const generatedCategories = {
        network: Math.floor(Math.random() * 100) + 1,
        experience: Math.floor(Math.random() * 100) + 1,
        personal: Math.floor(Math.random() * 100) + 1,
        socialMedia: Math.floor(Math.random() * 100) + 1,
        reputation: Math.floor(Math.random() * 100) + 1,
      };

      const generatedScore = Math.floor(
        (generatedCategories.network +
          generatedCategories.experience +
          generatedCategories.personal +
          generatedCategories.socialMedia +
          generatedCategories.reputation) / 5
      );

      setScore(generatedScore);
      setCategories(generatedCategories);
      setLoading(false);
    };

    fetchData();
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
        ) : error ? (
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        ) : (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ReactSpeedometer
                value={score}
                minValue={0}
                maxValue={100}
                segments={5}
                needleColor="steelblue"
                startColor="red"
                endColor="green"
                textColor="black"
                height={200}
              />
            </Box>
            <Typography variant="h5" component="h2" gutterBottom m={0}>
              <a href={`https://${platform}.com/in/${handle}`} target="_blank" rel="noopener noreferrer">
                {`https://${platform}.com/in/${handle}`}
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

export default function Score() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ScoreContent />
    </Suspense>
  );
}