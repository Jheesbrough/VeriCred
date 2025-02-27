"use client";
import { Container, Typography, Button, Box, Paper, Link, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SocialMediaInput from '@/components/SocialMediaInput';
import Image from 'next/image';

export default function GetStarted() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Get Started with VeriCred
        </Typography>
        <Box sx={{ textAlign: 'center', my: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h6">
                20,000+
              </Typography>
              <Typography variant="body2">
                Successful Hires
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h6">
                600,000+
              </Typography>
              <Typography variant="body2">
                Profiles Analyzed
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h6">
                5,000+
              </Typography>
              <Typography variant="body2">
                Companies Served
              </Typography>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={3} sx={{ mt: 2 }} alignItems="stretch">
          <Grid size={5}>
            <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
              <Typography variant="h6" component="h1">
                Start your VeriCred journey
              </Typography>
              <Typography sx={{ fontSize: 16, paddingBottom: 2 }} variant="body1">
                Enhance your hiring process with AI-driven employability scores. Connect with our team to discover how VeriCred can benefit your business.
              </Typography>
              <Button variant="contained" color="primary" href="/contact">
                Contact Us
              </Button>
            </Paper>
          </Grid>
          <Grid size={2} sx={{ textAlign: 'center', alignSelf: 'center' }}>
            <Typography variant="h6" component="h2">
              OR
            </Typography>
          </Grid>
          <Grid size={5}>
            <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="h6" component="h2">
                  Give it a go with your LinkedIn profile
                </Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <SocialMediaInput platform="linkedin" />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontSize: 14 }}>
            Need help? Visit our <Link href="/faq">FAQ</Link> page or <Link href="/support">Support</Link> page.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
