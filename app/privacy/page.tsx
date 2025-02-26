import { Box, Typography } from '@mui/material';

export default function Privacy() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Notice
      </Typography>
      <Typography variant="body1">
        For the full text of our Privacy Notice, please visit the following link:
        <a href="https://www.privacypolicies.com/live/your-template-link">Privacy Policy Template</a>
      </Typography>
    </Box>
  );
}
