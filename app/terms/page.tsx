import { Box, Typography } from '@mui/material';

export default function Terms() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="body1">
        For the full text of our Terms of Service, please visit the following link:
        <a href="https://www.termsofservicegenerator.net/live/your-template-link">Terms of Service Template</a>
      </Typography>
    </Box>
  );
}
