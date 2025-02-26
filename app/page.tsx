import { Container, Typography, Button, Box, AppBar, Toolbar, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import InfoIcon from '@mui/icons-material/Info';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import Image from 'next/image';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
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
                Your candidates' data is safe with us, protected by top-notch security measures.
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
    </>
  );
}
