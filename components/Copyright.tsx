import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography sx={{ textAlign: 'center' }}>
      {'Copyright © '}
      <Link href="/">Blackford Flower Shop, Inc.</Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
