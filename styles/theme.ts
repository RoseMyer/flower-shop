'use client';
import { Tsukimi_Rounded } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const tsukimi = Tsukimi_Rounded({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  typography: {
    fontFamily: tsukimi.style.fontFamily,
  },
});

export default theme;
