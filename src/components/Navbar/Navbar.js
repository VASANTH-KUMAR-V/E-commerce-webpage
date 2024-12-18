import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../Assets/img/ollir-organics-background.png";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function PrimarySearchAppBar() {
  const { getTotalCartItems } = useContext(ShopContext);
  const [isCartUpdated, setCartUpdated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (getTotalCartItems() > 0) {
      setCartUpdated(true);
      const timer = setTimeout(() => setCartUpdated(false), 500);
      return () => clearTimeout(timer);
    }
  }, [getTotalCartItems()]);

  const isActive = (path) => location.pathname === path;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "white", px: 2 }}>
        <Toolbar>
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "60px",
              width: "auto",
              marginRight: "16px",
              padding: "4px",
            }}
          />

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {/* Home Link */}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                aria-label="home"
                color="inherit"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Text on the right for larger screens
                  color: isActive("/") ? "orange" : "#81C408",
                  "&:hover": { color: "orange" },
                  px: { xs: 1, sm: 2 },
                  py: { sm: 1 }, // Added padding for better spacing
                }}
              >
                <HomeIcon sx={{ fontSize: { xs: "24px", sm: "28px" } }} />
                <Box
                  component="span"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    fontWeight: "bold",
                    fontSize: { sm: "14px", md: "16px" },
                    ml: 1, // Added margin-left to create space between the icon and text
                  }}
                >
                  Home
                </Box>
              </IconButton>
            </Link>

            {/* Cart Link */}
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                aria-label="cart"
                color="inherit"
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Text on the right for larger screens
                  color: isActive("/cart") ? "orange" : "#81C408",
                  "&:hover": { color: "orange" },
                  px: { xs: 1, sm: 2 },
                  py: { sm: 1 }, // Added padding for better spacing
                  animation: isCartUpdated ? "shake 0.5s" : "none",
                  "@keyframes shake": {
                    "0%, 100%": { transform: "translateX(0)" },
                    "25%": { transform: "translateX(-5px)" },
                    "75%": { transform: "translateX(5px)" },
                  },
                }}
              >
                <Badge
                  badgeContent={getTotalCartItems()}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: { xs: "10px", sm: "12px" },
                      height: { xs: "18px", sm: "20px" },
                      minWidth: { xs: "18px", sm: "20px" },
                    },
                  }}
                >
                  <ShoppingCartIcon
                    sx={{ fontSize: { xs: "24px", sm: "28px" } }}
                  />
                </Badge>
                <Box
                  component="span"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    fontWeight: "bold",
                    fontSize: { sm: "14px", md: "16px" },
                    ml: 1, // Added margin-left to create space between the icon and text
                  }}
                >
                  Cart
                </Box>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
