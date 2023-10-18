import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const links = [
  {
      title: "Home",
      href: "/",
      icon: HomeIcon
  },
  {
      title: "FunkyStuff",
      href: "/funky",
      icon: BedtimeIcon
  },
  {
      title: "Contact",
      href: "/contact",
      icon: ContactPageIcon
  },
  {
      title: "ToDo",
      href: "/todo",
      icon: FormatListBulletedIcon
  },
  {
      title: "Cats",
      href: "/pages/cats",
      icon: PetsIcon
  }
]

const DRAWER_WIDTH = 240;


export default function Header({title}) {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
        <ThemeRegistry>

          <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                top: ['48px', '56px', '64px'],
                height: 'auto',
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left">
            <Divider />
            <List>
              <nav className="sidebar">
                {links.map(({title, href, icon: Icon}) => (
                  <ListItem key={href}>
                      <ListItemButton href={href}>
                        <ListItemIcon>
                          <Icon />
                        </ListItemIcon>
                        <ListItemText primary={title} />
                      </ListItemButton>
                  </ListItem>
                ))}
              </nav>
            </List>
          </Drawer>
        </ThemeRegistry>
        
    </Box>
  );
}