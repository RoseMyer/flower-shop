'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AppBar, Slide, useScrollTrigger, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from "next/navigation";
import { Modal } from './Modal';


export default function Navigation() {
  const trigger = useScrollTrigger();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setMenuOpen(false);
    setShowAbout(true);
  };

  const handleCloseModal = () => {
    setMenuOpen(true);
    setShowAbout(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: '/about', text: 'ABOUT' },
    { href: '/products', text: 'PRODUCTS' },
    { href: '/checkout', text: 'CHECKOUT' }
  ];

  const modalBody =`Welcome to the Rose Bush!`

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar className={`nav-bar`} sx={{backgroundColor:`#4338ca`}}>

        <nav className="flex justify-between items-center my-2 mx-24">
          <Link href={`/`}><h1 className={`transition-all duration-500 text-3xl text-bold hover:underline hover:scale-125 leading-relaxed`}>ICARUS DRONES</h1></Link>
          <IconButton onClick={() => setMenuOpen(true)} color="inherit">
            <MenuIcon fontSize='large' className={`transition-all duration-500 text-3xl text-bold hover:scale-125`}/>
          </IconButton>
          <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
            <List sx={{ width: 300, bgcolor: '#4338ca', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <ListItem sx={{ justifyContent: 'center' }}>
                    <h1 className={`transition-all duration-500 text-2xl text-bold hover:underline hover:scale-125 my-5`}>{link.text}</h1>
                  </ListItem>
                </Link>
              ))}
              <button onClick={handleAboutClick} >
                <h1 className={`transition-all duration-500 text-2xl text-bold hover:underline hover:scale-125 my-5`}>{'ABOUT'}</h1>     
              </button>
            </List>
          </Drawer>
        </nav>
        <Modal show={showAbout} onClose={handleCloseModal} title={'HOW TO USE'} body={modalBody} />
      </AppBar>
    </Slide>
  );
}