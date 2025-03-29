import type { Metadata } from 'next';
import '../styles/globals.css';
import { ThemeProvider } from '../components/shadcn/ui/theme-provider';
import SmoothScrollWrapper from '@/components/B-components/LANDING/useSmoothScroll';
import HEADERIT from '@/components/A-header/header';
import { Footerit } from '@/components/A-header/footer';

export const metadata: Metadata = {
  title: 'IT Adhiba - Web, App, Software & Digital Solutions',
  description:
    'IT Adhiba specializes in cutting-edge website, app, and software development, along with innovative digital marketing and signage solutions to elevate your brand.',
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollWrapper>
            <HEADERIT />
            <main>{children}</main>
            <Footerit />
          </SmoothScrollWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
