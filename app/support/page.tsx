import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function Support() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Support
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          If you need assistance, please contact our support team.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          You can reach us via email at <Link href="mailto:support@vericred.com">support@vericred.com</Link>.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          For more information, visit our <Link href="/faq">FAQ</Link> page.
        </Typography>
      </Box>
    </Container>
  );
}
