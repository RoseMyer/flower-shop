'use client';
import { Orbitron } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  typography: {
    fontFamily: orbitron.style.fontFamily,
  },
});

export default theme;
