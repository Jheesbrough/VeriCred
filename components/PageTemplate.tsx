import { Container, Typography, Box, AppBar, Toolbar } from '@mui/material';
import Footer from './Footer';
import Link from 'next/link';

interface PageTemplateProps {
  children: React.ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <>
      <Container maxWidth="md">
        <AppBar position="static">
          <Toolbar>
            <Link href="/" passHref>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                VeriCred - automated employee scoring
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Box sx={{ my: 4 }}>
          {children}
        </Box>
        <Footer />
      </Container>
    </>
  );
}
