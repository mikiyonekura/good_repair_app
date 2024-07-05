import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: 'transparent', boxShadow: 'none', position: 'fixed', top: 0, left: 0, right: 0 }}>
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between', width: '100%' }}>
          <IconButton edge="start" aria-label="menu" sx={{ color: '#FFD700', mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <List sx={{ display: 'flex', flexDirection: 'row', padding: 0, flexGrow: 1, justifyContent: 'center' }}>
            {['HOME', 'PROS & CONS', 'ABOUT', 'PRICE', 'CONTACT'].map((text, index) => (
              <ListItem key={text} sx={{ width: 'auto', padding: 0, margin: '0 20px' }}>
                <ListItemText sx={{ textAlign: 'center' }}>
                  <Link href={`#${text.replace(/ & /g, '-').toLowerCase()}`} passHref>
                    <Typography sx={{ color: '#FFD100', fontWeight: '700', textAlign: 'center' }}>
                      {text}
                    </Typography>
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
