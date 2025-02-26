"use client";
import { Typography, Paper, TextField, Button, Box } from '@mui/material';

export default function Contact() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Have questions or need assistance? Fill out the form below to get in touch with us.
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
}
