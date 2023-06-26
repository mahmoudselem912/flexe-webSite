import logo from "../../assets/newlogo.png";
import "./navBar.css";

import * as React from "react";
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
import { programmsContent } from "../../utility/programmsContent";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  {
    name: "تواصل معنا",
    arrow: false,
    route: "/",
    href: "#footer"
  },
  {
    name: "عن الشركة",
    arrow: false,
    route: "/",
    href: "#aboutCompany"
  },
  {
    name: "عملاؤنا",
    arrow: false,
    href: "#clients",
    route: "/"
  },
  {
    name: "العروض",
    arrow: false,
  },

  {
    name: "البرامج",
    arrow: true,
    dropDownLinks: [
      {
        name: "تطبيقات الفاتورة الالكترونية",
        subText: "",
        params: programmsContent.EInvoice,
        route: "/program",
      },
      {
        name: "تطبيقات الايصال الالكترونى",
        subText: "",
        params: programmsContent.EReceipt,
        route: "/program",
      },
      {
        name: "برنامج محاسبات ERP",
        subText: "",
        params: programmsContent.ERP,
        route: "/program",
      },
      {
        name: "mini ERP",
        subText: "",
        params: programmsContent.miniERP,
        route: "/program",
      },

      {
        name: "pay Roll",
        subText: "",
        params: programmsContent.payRoll,
        route: "/program",
      },
    ],
  },
  {
    name: "الخدمات",
    arrow: false,
    route: "/services",
  },
  {
    name: "الرئيسية",
    arrow: false,
    route: "/",
  },
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const theme = createTheme({
    typography: {
      fontSize: 30,
    },
  });

  function handleDropDownLinks(params, route) {
    navigate(route, {
      state: {
        content: params,
      },
    });
  }

  // console.log(show);

  const drawer = (
    <ThemeProvider theme={theme}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          <img alt="fff" src={logo} className="logo" />
        </Typography>
        <Divider />
        <List>
          {navItems.map((item, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  primary={item.name}
                  sx={{ fontFamily: "Hamdy v1" }}
                />
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
        <Toolbar>
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
            {navItems.map((item, i) => (
              <div className="nav-bar_text">
                <Button
                  key={i}
                  sx={{
                    color: "black",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    "&:hover": {
                      color: "#e83e8c",
                      background: "none",
                    },
                    fontFamily: "Hayah",
                  }}
                  className="nav-bar__button"
                  href={item.href}
                  onClick={() => {
                    navigate(item.route);
                  }}
                >
                  {item.name}
                </Button>
                {item.arrow ? <i className="arrow down"></i> : null}
                {item.arrow ? (
                  <div class="dropdown-content">
                    {item.dropDownLinks.map((i) => (
                      <div
                        className="dropdown-content__content"
                        onClick={() => handleDropDownLinks(i.params, i.route)}
                      >
                        <div>{i.name}</div>
                        <div className="dropdown-content__sub-text">
                          {i.subText}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
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
