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
import './navbar.css';

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
      <AppBar position="fixed" className="app-bar">
        <Toolbar>
          {/* Menu Button (for mobile view) */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="menu-icon"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo/Title */}
          <Typography variant="h6" className="nav-title">
            <a href="/" className="nav-link">
              Fateh Care
            </a>
          </Typography>

          {/* Nav Buttons (visible only on larger screens) */}
          <Box className="nav-buttons">
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit" className="nav-button">
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          className="drawer-container"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" className="drawer-title">
            Fateh Care
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text}>
                <ListItemText
                  primary={item.text}
                  className="drawer-item-text"
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
