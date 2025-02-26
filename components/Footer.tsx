import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ textAlign: 'center', py: 3, mt: 4, borderTop: '1px solid #ddd' }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} VeriCred
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
          Privacy Notice
        </Link>
        <Link href="/cookies" color="inherit" sx={{ mx: 1 }}>
          Cookie Policy
        </Link>
        <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
        <Link href="/about" color="inherit" sx={{ mx: 1 }}>
          About Us
        </Link>
        <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
          Contact
        </Link>
      </Box>
    </Box>
  );
}
