"use client";
import { Container, Typography, Button, Box, Paper, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SocialMediaInput from '../../components/SocialMediaInput';

export default function GetStarted() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Get Started with VeriCred
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }} alignItems="center">
          <Grid size={5}>
            <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
              <Typography sx={{ fontSize: 18, paddingBottom: 2 }}>
                Empower your hiring process with AI-assisted employability scores. Talk to one of our team to find out how VeriCred can help your business.
              </Typography>
              <Button variant="contained" color="primary" href="/contact">
                Contact Us
              </Button>
            </Paper>
          </Grid>
          <Grid size={2} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" component="h2">
              OR
            </Typography>
          </Grid>
          <Grid size={5}>
            <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Give it a go with your LinkedIn profile
              </Typography>
              <SocialMediaInput platform="linkedin" />
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography sx={{ fontSize: 14 }}>
              Need help? Visit our <Link href="/faq">FAQ</Link> page or <Link href="/support">Support</Link> page.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
