"use client";
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SocialMediaInput from '../../components/SocialMediaInput';
import { SetStateAction, useState } from 'react';

export default function GetStarted() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Get Started with VeriCred
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid size={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography sx={{ fontSize: 18, paddingBottom: 2 }}>
                Empower your hiring process with AI-assisted employability scores. Talk to one of our team to find out how VeriCred can help your business.
              </Typography>
              <Button variant="contained" color="primary" href="/contact">
                Contact Us
              </Button>
            </Paper>
          </Grid>
          <Grid size={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Give it a go with your social media profile
              </Typography>
              <SocialMediaInput />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
