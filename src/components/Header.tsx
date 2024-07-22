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
import Drawer from '@mui/material/Drawer';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['ホーム', 'メリット', 'リペアの内容', '料金', '問い合わせ'];

  return (
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: 'transparent', boxShadow: 'none', position: 'fixed', top: 0, left: 0, right: 0 }}>
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between', width: '100%' }}>
          <IconButton edge="start" aria-label="menu" sx={{ color: 'black', mr: 2 }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'flex-start' }}>
            {menuItems.map((text, index) => (
              <Box key={text} sx={{ margin: '0 10px' }}>
                <Link href={`#${text.replace(/ & /g, '-').toLowerCase()}`} passHref>
                  <Typography 
                    sx={{ 
                      color: 'black', 
                      fontWeight: '700', 
                      textAlign: 'center',
                      fontFamily: '"Yu Mincho", "YuMincho", "游明朝", "Yu Mincho Light", "YuMincho Light", "游明朝ライト"',
                      fontSize: '0.875rem', // 文字サイズを小さく
                      position: 'relative',
                      '&:hover': {
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          width: '100%',
                          height: '2px',
                          bottom: '-2px',
                          left: '0',
                          backgroundColor: '#FFD700',
                          transform: 'scaleX(1)',
                          transition: 'transform 0.3s ease-in-out'
                        }
                      },
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '2px',
                        bottom: '-2px',
                        left: '0',
                        backgroundColor: '#FFD700',
                        transform: 'scaleX(0)',
                        transition: 'transform 0.3s ease-in-out'
                      }
                    }}
                  >
                    {text}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text} onClick={handleDrawerToggle}>
              <Link href={`#${text.replace(/ & /g, '-').toLowerCase()}`} passHref>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>



  );
}
