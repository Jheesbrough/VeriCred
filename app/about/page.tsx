import { Typography, Paper } from '@mui/material';

export default function About() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        VeriCred is a leading provider of AI-assisted employability scoring. Our mission is to help individuals and organizations make informed decisions based on accurate and secure data.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our team of experts leverages cutting-edge technology to deliver fast and reliable results. We are committed to maintaining the highest standards of security and privacy for our users.
      </Typography>
    </Paper>
  );
}
