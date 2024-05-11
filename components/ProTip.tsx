"use client"
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function ProTip() {
  return (
    <Typography sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <EmailOutlinedIcon sx={{ mr: 1 }} />
      <Link href="mailto:rosesmyer@icloud.com" sx={{ verticalAlign: 'middle' }}>Get in touch</Link>
    </Typography>
  );
}
