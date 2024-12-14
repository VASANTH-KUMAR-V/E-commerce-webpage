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
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../Assets/img/ollir-organics-background.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function PrimarySearchAppBar() {
  const { getTotalCartItems } = useContext(ShopContext);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
            <HomeIcon sx={{ color: "#81C408" }} />
          </IconButton>
          <p>Home</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <IconButton size="large" aria-label="cart" color="inherit">
            <Badge badgeContent={getTotalCartItems()} color="error">
              <ShoppingCartIcon sx={{ color: "#81C408" }} />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "70px", width: "auto" }}
          />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {/* Home Icon and Name */}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton size="large" aria-label="home" color="inherit">
                <HomeIcon sx={{ color: "#81C408" }} />
              </IconButton>
              <span style={{ color: "#81C408", fontWeight: "bold" }}>Home</span>
            </Link>

            {/* Cart Icon and Name */}
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton size="large" aria-label="cart" color="inherit">
                <Badge badgeContent={getTotalCartItems()} color="error">
                  <ShoppingCartIcon sx={{ color: "#81C408" }} />
                </Badge>
              </IconButton>
              <span style={{ color: "#81C408", fontWeight: "bold" }}>Cart</span>
            </Link>
          </Box>

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
    </Box>
  );
}
