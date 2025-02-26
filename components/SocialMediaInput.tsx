import { Box, TextField, MenuItem, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const socialMediaOptions = [
  { value: 'twitter', label: 'Twitter' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  // Add more social media options as needed
];

export default function SocialMediaInput() {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [handle, setHandle] = useState('');
  const router = useRouter();

  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
  };

  const handleHandleChange = (event) => {
    setHandle(event.target.value);
  };

  const handleGenerateScore = () => {
    router.push(`/score?platform=${selectedPlatform}&handle=${handle}`);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Enter Social Media Profile
      </Typography>
      <TextField
        select
        label="Select Platform"
        value={selectedPlatform}
        onChange={handlePlatformChange}
        fullWidth
        sx={{ mb: 2 }}
      >
        {socialMediaOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Enter Handle"
        variant="outlined"
        fullWidth
        value={handle}
        onChange={handleHandleChange}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateScore}
        disabled={!selectedPlatform || !handle}
      >
        Generate Score
      </Button>
    </Box>
  );
}