import Box from '@mui/material/Box';
import ProTip from "./ProTip";
import Copyright from "./Copyright";

export default function Footer(props: any) {
  return (
    <Box component="footer" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Changed to center to evenly distribute space
      backgroundColor:`#4338ca`, // Adjust color according to your theme
      color: 'common.white',
      p: 1,
      width: '100%',
      position: 'fixed',  // Changed to fixed
      left: 0,            // Ensures it sticks to the left edge
      bottom: 0,          // Ensures it sticks to the bottom edge
    }}>
      <ProTip />
      <Copyright />
    </Box>
  );
}
