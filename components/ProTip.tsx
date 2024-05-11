"use client"
import {Typography, Stack, Link} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';


export default function ProTip() {
  return (
    <Stack direction={'row'} sx={{justifyContent:'center'}} spacing={3}>
      <Typography sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <EmailOutlinedIcon sx={{ mr: 1 }} />
        <Link href="mailto:rosesmyer@icloud.com" sx={{ verticalAlign: 'middle' }}>Get in touch</Link>
      </Typography>
      <Typography sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <PhoneOutlinedIcon sx={{ mr: 1 }} />
        +1 (123) 111-1234
      </Typography>
    </Stack>
    
  );
}
