"use client";
import { Typography, Button, Box, Paper, Tabs, Tab } from '@mui/material';
import Grid from '@mui/material/Grid2';
import InfoIcon from '@mui/icons-material/Info';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const descriptions = [
    [
      {
        title: "Efficient Hiring",
        content: "Employers can streamline their hiring process with our AI-driven platform, ensuring they find the best candidates quickly and efficiently."
      },
      {
        title: "Data-Driven Decisions",
        content: "Make informed hiring decisions based on comprehensive data analysis and AI-generated employability scores."
      },
      {
        title: "Enhanced Security",
        content: "Protect candidate data with top-notch security measures, ensuring privacy and compliance with industry standards."
      }
    ],
    [
      {
        title: "Career Growth",
        content: "Job seekers can leverage our platform to showcase their skills and get matched with the best job opportunities."
      },
      {
        title: "Personalized Recommendations",
        content: "Receive job recommendations tailored to your skills and experience, increasing your chances of landing the perfect job."
      },
      {
        title: "Skill Development",
        content: "Access resources and tools to enhance your skills and improve your employability scores."
      }
    ],
    [
      {
        title: "Collaborative Opportunities",
        content: "Partners can collaborate with us to enhance their offerings and provide better services to their clients."
      },
      {
        title: "Innovative Solutions",
        content: "Leverage our AI technology to develop innovative solutions that meet the needs of your target market."
      },
      {
        title: "Market Expansion",
        content: "Expand your market reach by integrating our platform's capabilities into your existing services."
      }
    ]
  ];

  return (
    <>
      {/* Header Section */}
      <Box sx={{ width: '100%', height: 220, overflow: 'hidden', position: 'relative' }}>
        <Image src="/office.jpg" alt="office" width={1920} height={220} style={{ objectFit: 'cover' }} />
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to VeriCred
          </Typography>
          <Typography variant="body1" gutterBottom>
            Empower your hiring process with AI-assisted employability scores.
          </Typography>
          <Link href="/get-started" passHref>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </Link>
        </Box>
      </Box>



      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h6" component="h3">
          Discover the Benefits of VeriCred
        </Typography>
        <Box sx={{ flexGrow: 1, my: 4 }}>
          <Grid container spacing={3}>
            <Grid size={4}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <InfoIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" component="h2">
                  Accurate
                </Typography>
                <Typography variant="body2">
                  Our AI ensures accurate scoring based on multiple data points, helping you make informed hiring decisions.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={4}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <SecurityIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" component="h2">
                  Secure
                </Typography>
                <Typography variant="body2">
                  Your candidates&apos; data is safe with us, protected by top-notch security measures.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={4}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <SpeedIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" component="h2">
                  Fast
                </Typography>
                <Typography variant="body2">
                  Get employability scores in seconds with our efficient AI algorithms, streamlining your hiring process.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h4" component="h4" color="primary" sx={{ my: 2 }}>
          95% Satisfaction Rate
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" component="h6">
              10,000+
            </Typography>
            <Typography variant="body2">
              Employers
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" component="h6">
              50,000+
            </Typography>
            <Typography variant="body2">
              Job Seekers
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" component="h6">
              1,000+
            </Typography>
            <Typography variant="body2">
              Partners
            </Typography>
          </Box>
        </Box>
      </Box >

      {/* Navigation & User-Specific Segments */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', my: 4, display: 'flex', justifyContent: 'center' }}>
        <Tabs value={tabIndex} onChange={handleTabChange} aria-label="user segments">
          <Tab label="Built For Employers" />
          <Tab label="Built For Job Seekers" />
          <Tab label="Built For Partners" />
        </Tabs>
      </Box>

      {/* Visual & Informational Section */}
      <Box sx={{ flexGrow: 1, my: 4 }}>
        <Grid container spacing={3} alignItems={'stretch'} direction={'row'} justifyContent={'center'}>
          {descriptions[tabIndex].map((desc, index) => (
            <Grid key={index} size={4} minHeight={180}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="h6" component="h3">
                  {desc.title}
                </Typography>
                <Typography variant="body2">
                  {desc.content}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>


        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Why Companies Love VeriCred
          </Typography>
            <Typography variant="body1" gutterBottom>
            Our platform provides accurate, secure, and fast employability scores, helping you make informed hiring decisions. By leveraging advanced AI algorithms, we ensure that each score is based on comprehensive data analysis, giving you a reliable measure of a candidate's potential. Our commitment to security means that all candidate data is protected with industry-leading measures, ensuring privacy and compliance. Additionally, our efficient processing allows you to receive employability scores in seconds, streamlining your hiring process and enabling you to focus on finding the best talent.
            </Typography>
        </Box>

        {/* Business Size Selection */}
        <Box sx={{ flexGrow: 1, my: 4 }}>
          <Grid container spacing={3}>
            <Grid size={4}>
              <Box sx={{ position: 'relative', height: 200 }}>
                <Image src="/SmallBusiness.jpg" alt="Small Business" layout="fill" objectFit="cover" />
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', p: 2, textAlign: 'center' }}>
                  <Typography variant="h6" component="h3">
                    Small Business
                  </Typography>
                  <Typography variant="body2">
                    Tailored solutions for small businesses to find the right talent.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={4}>
              <Box sx={{ position: 'relative', height: 200 }}>
                <Image src="/MediumBusiness.jpg" alt="Medium Business" layout="fill" objectFit="cover" />
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', p: 2, textAlign: 'center' }}>
                  <Typography variant="h6" component="h3">
                    Medium Business
                  </Typography>
                  <Typography variant="body2">
                    Scalable solutions for growing businesses to streamline hiring.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={4}>
              <Box sx={{ position: 'relative', height: 200 }}>
                <Image src="/LargeBusiness.jpg" alt="Large Business" layout="fill" objectFit="cover" />
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', p: 2, textAlign: 'center' }}>
                  <Typography variant="h6" component="h3">
                    Large Enterprise
                  </Typography>
                  <Typography variant="body2">
                    Comprehensive solutions for large enterprises to manage high-volume hiring.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Link href="/get-started" passHref>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </Link>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Box sx={{ textAlign: 'left', my: 2 }}>
          <Typography variant="h6" component="h3">
            What is VeriCred?
          </Typography>
          <Typography variant="body2">
            • VeriCred is an AI-driven platform that helps employers streamline their hiring process by providing accurate employability scores.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'left', my: 2 }}>
          <Typography variant="h6" component="h3">
            How does it work?
          </Typography>
          <Typography variant="body2">
            • Our platform analyzes multiple data points to generate employability scores, helping employers make informed hiring decisions.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'left', my: 2 }}>
          <Typography variant="h6" component="h3">
            Is my data secure?
          </Typography>
          <Typography variant="body2">
            • Yes, we use top-notch security measures to protect your data and ensure privacy and compliance with industry standards.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Link href="/faq" passHref>
            <Button variant="contained" color="primary">
              Read More
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
