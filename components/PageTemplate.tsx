import { Container, Typography, Box, AppBar, Toolbar, Button } from '@mui/material';
import Footer from './Footer';
import Link from 'next/link';

interface PageTemplateProps {
  children: React.ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static">
          <Toolbar>
            <Link href="/" passHref>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                VeriCred - automated employee scoring
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Link href="/login" passHref>
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1, my: 4 }}>
          {children}
        </Box>
        <Footer />
      </Container>
    </Box>
  );
}
