import Slide from "@mui/material/Slide";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Button,
  ListItemText,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./app.css";
//handle the scrolling hide and show
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const navItems = [
  { name: "Home", link: "/" },
  { name: "Donation", link: "/donation" },
  { name: "Volunteers", link: "/volunteers" },
  { name: "Programs", link: "/program" },
  { name: "Partnership", link: "/partnership" },
  { name: "Gallery", link: "/gallery" },
  { name: "Blog", link: "/blog" },
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/contact" },
];
const drawerWidth = 240;

export const Appbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure 'window' is available

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      console.log(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link
          to="/"
          style={{ color: "red", display: "flex", alignItems: "center" }}
        >
          <img
            src="/Images/logo.png"
            style={{ marginRight: "10px", height: "30px", width: "50px" }}
          />
          <span style={{ fontWeight: 700 }}>Ibadan Food Bank</span>
        </Link>
      </Typography>
      <Divider />
      <List sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={`${item.link}`} style={{ color: "red", textAlign:'center' }}>
                <ListItemText primary={item.name} sx={{ textAlign: "center" }}/>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: isScrolled ? "transparent" : "white",
            color: isScrolled ? "red" : "white",
            boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          <Toolbar sx={{ flexDirection: { md: "row" } }}>
            
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                alignItems: "center",
                display: { xs: "flex", sm: "flex" },
              }}
            >
              <Link
                to="/"
                style={{ color: "red", display: "flex", alignItems: "center" }}
              >
                <img
                  src="/Images/logo.png"
                  style={{ marginRight: "10px", height: "30px", width: "50px" }}
                />
                <span style={{ fontWeight: 700 }}>Ibadan Food Bank</span>
              </Link>
            </Typography>
            <Box sx={{ display: { xs:'none',sm: "none", md: "block" } }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{ color: "red !important" }}
                  className="butHover butActive"
                >
                  <Link to={`${item.link}`} style={{ color: "red" }}>
                    {" "}
                    {item.name}
                  </Link>
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "block", md:'none' } }}
            >
              <MenuIcon htmlColor="red" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* The Mobile View Menu */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </>
  );
};
