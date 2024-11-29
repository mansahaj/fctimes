import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'About Us', link: '/about' },
    { text: 'News', link: '/news' },
    { text: 'Contact Us', link: '/contact' },
  ];

  return (
    <>
      {/* Top AppBar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#e28546', boxShadow: 'none' }}>
        <Toolbar>
          {/* Menu Button (for mobile view) */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo/Title */}
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white', textAlign: 'left'}}>
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Fateh Care
            </a>
          </Typography>

          {/* Nav Buttons (visible only on larger screens) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: '#ffffff', height: '100%' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            sx={{
              padding: '16px',
              fontWeight: 'bold',
              color: '#e28546',
              textAlign: 'center',
            }}
          >
            Fateh Care
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text}>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontSize: '1rem', fontWeight: 'bold' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
