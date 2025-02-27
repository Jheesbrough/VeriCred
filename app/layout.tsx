import PageTemplate from '@/components/PageTemplate';
import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import theme from './theme';

export const metadata: Metadata = {
  title: 'VeriCred',
  description: 'VeriCred offers Automated Employability Scoring for businesses of all sizes. As a trusted partner, we help you make better hiring decisions without bias or discrimination using our proprietary AI algorithms.',
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <PageTemplate>
              {children}
            </PageTemplate>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}