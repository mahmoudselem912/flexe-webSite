// import React from "react";
import logo from "../../assets/newlogo.png";
import "./navBar.css";

// const NavBar = () => {
//   return (
//     <nav className="nav-bar">
//       <div className="nav-bar_grid">
//         <div className="logo-container">
//           <img alt="fff" src={logo} className="logo" />
//         </div>

//         <div className="nav-bar_components">
//           <div className="nav-bar_text">تواصل معنا</div>
//           <div className="nav-bar_text">عن الشركة</div>
//           <div className="nav-bar_text">العروض</div>
//           <div className="nav-bar_text">عملاؤنا</div>
//           <div className="nav-bar_text">البرامج</div>
//           <div className="nav-bar_text">الخدمات</div>
//           <div className="nav-bar_text">الرئيسية</div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  "تواصل معنا",
  "عن الشركة",
  "العروض",
  "عملاؤنا",
  "البرامج",
  "الخدمات",
  "الرئيسية",
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const theme = createTheme({
    typography: {
      fontSize: 30,
    },
  });

  const drawer = (
    <ThemeProvider theme={theme}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
         
            <img alt="fff" src={logo} className="logo" />
          
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </ThemeProvider>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "white" }} className="appBar">
        <Toolbar sx={{ paddingRight: "60px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "blue" }}
          >
            <MenuIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img alt="fff" src={logo} className="logo" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "inline-flex", gap: "1vw" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func
// };

export default NavBar;
