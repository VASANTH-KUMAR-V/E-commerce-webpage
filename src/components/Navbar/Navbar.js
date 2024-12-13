import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../Assets/img/ollir-organics-background.png";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext"; // Import ShopContext

export default function PrimarySearchAppBar() {
  const { getTotalCartItems } = useContext(ShopContext); // Get total cart items from context
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem> {/* Added Logout */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <IconButton size="large" aria-label="home" color="inherit">
            <HomeIcon sx={{ color: "#81C408" }} /> {/* Home icon */}
          </IconButton>
          <p>Home</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <IconButton size="large" aria-label="cart" color="inherit">
            <Badge badgeContent={getTotalCartItems()} color="error"> {/* Dynamic cart quantity */}
              <ShoppingCartIcon sx={{ color: "#81C408" }} /> {/* Cart icon */}
            </Badge>
          </IconButton>
          <p>Cart</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle sx={{ color: "#81C408" }} /> {/* Profile icon */}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        {/* White background */}
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "70px", width: "auto" }}
          />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* Home Icon (wrapped in Link) */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton size="large" aria-label="home" color="inherit">
                <HomeIcon sx={{ color: "#81C408" }} />
              </IconButton>
            </Link>

            {/* Cart Icon (wrapped in Link) */}
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <IconButton size="large" aria-label="cart" color="inherit">
                <Badge badgeContent={getTotalCartItems()} color="error"> {/* Dynamic cart quantity */}
                  <ShoppingCartIcon sx={{ color: "#81C408" }} />
                </Badge>
              </IconButton>
            </Link>

            {/* Profile Icon with Menu */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ color: "#81C408" }} />
            </IconButton>
          </Box>

          {/* Mobile menu toggle */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon sx={{ color: "#81C408" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}