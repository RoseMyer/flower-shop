import "@/styles/globals.css"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import theme from '@/styles/theme';
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer';
import { CartProvider } from "@/context/cartProvider"

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});


export const metadata: Metadata = {
  title: "Mama San's Rosebush",
  description: "FLOWERS FOR ALL",
};

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({children}:LayoutProps) {
  return (
    <html lang="en" className={orbitron.className}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CartProvider>
              <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navigation />
                <Box component="main" sx={{ flexGrow: 1, overflowY: 'auto' }}>
                  {children}
                </Box>
                <Footer />
              </Box>
            </CartProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
