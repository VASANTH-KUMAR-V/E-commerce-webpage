import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Appbar.css';  // Import the CSS file

const settings = ['Profile', 'Account', 'Logout'];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className="navbar">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" className="logo-text">
            <img src={require('../assets/img/ollir-organics.jpg')} alt="Logo" className="logo-img" />
          </Typography>
          
          {/* Right Side Menu: Home, Cart, Profile */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              startIcon={<HomeIcon />} 
              className="nav-btn"
            >
              Home
            </Button>
            <Button 
              startIcon={<ShoppingCartIcon />} 
              className="nav-btn"
            >
              Cart
            </Button>

            {/* Profile Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
