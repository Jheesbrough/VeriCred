import { Box, Typography } from '@mui/material';

export default function Cookies() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Cookie Policy
      </Typography>
      <Typography variant="body1">
        For the full text of our Cookie Policy, please visit the following link:
        <a href="https://www.cookiepolicygenerator.com/live/your-template-link">Cookie Policy Template</a>
      </Typography>
    </Box>
  );
}
