import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Button variant="contained" color="primary" component={Link} href="/">
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
}
