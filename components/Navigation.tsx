'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AppBar, Slide, useScrollTrigger, IconButton, Drawer, List, ListItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from "next/navigation";


export default function Navigation() {
  const trigger = useScrollTrigger();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: '/about', text: 'ABOUT' },
    { href: '/products', text: 'PRODUCTS' },
    { href: '/checkout', text: 'CHECKOUT' },
    { href: '/help', text: 'HELP/FAQ' }
  ];

  const link_style = {
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.25)',
      // color: 'gray'
    }
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar sx={{backgroundColor:`#4338ca`, px: 4, py: 2}}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link href={`/`}>
          <Typography variant="h4" sx={link_style}>FLOWER SHOP</Typography>  
          </Link>
          <IconButton onClick={() => setMenuOpen(true)} color="inherit">
            <MenuIcon fontSize='large' sx={link_style}/>
          </IconButton>
          <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
            <List sx={{ width: 300, bgcolor: '#4338ca', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <ListItem sx={{ justifyContent: 'center', color: 'white' }}>
                    <Typography variant="h4" sx={link_style}>{link.text}</Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        </nav>
      </AppBar>
    </Slide>
  );
}