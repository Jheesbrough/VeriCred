import { Box, TextField, Button, Typography } from '@mui/material';
import { SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';

interface SocialMediaInputProps {
  platform: string;
}

export default function SocialMediaInput({ platform }: SocialMediaInputProps) {
  const [handle, setHandle] = useState('');
  const router = useRouter();

  const handleHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setHandle(event.target.value);
  };

  const handleGenerateScore = () => {
    router.push(`/score?platform=${platform}&handle=${handle}`);
  };

  return (
    <Box sx={{ p: 2 }}>
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
        disabled={!handle}
      >
        Generate Score
      </Button>
    </Box>
  );
}