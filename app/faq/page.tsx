import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function FAQ() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Here you will find answers to the most common questions about VeriCred.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Q: What is VeriCred?</strong>
          <br />
          A: VeriCred is an AI-assisted employability scoring platform that analyzes social media profiles to generate employability scores.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Q: How does VeriCred work?</strong>
          <br />
          A: VeriCred uses AI algorithms to evaluate various aspects of social media profiles, including network, experience, personal attributes, social media activity, and reputation.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Q: How can I contact support?</strong>
          <br />
          A: Visit our <Link href="/support">Support</Link> page for more information.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Q: Can I opt out of being scored?</strong>
          <br />
          A: VeriCred only scans public social media profiles. If you want to opt out, you are welcome to delete or privatize your social media accounts.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Q: How accurate are the scores?</strong>
          <br />
          A: The scores generated by VeriCred are based on a very detailed analysis of social media profiles. Many companies use VeriCred scores as the primary factor in their hiring decisions.
        </Typography>
      </Box>
    </Container>
  );
}
