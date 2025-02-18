import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { Collections, Event, Group, Handshake, RssFeed } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const NAVIGATION = [
  {
    segment: "admin",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "admin/user",
    title: "Admin",
    icon: <Group />,
    allowedRole: process.env.REACT_APP_ARC
  },
  {
    segment: "admin/program",
    title: "Program",
    icon: <Event />,
  },
  {
    segment: "admin/blog",
    title: "Blog",
    icon: <RssFeed />,
  },
  {
    segment: "admin/gallery",
    title: "Gallery",
    icon: <Collections />,
  },
  {
    segment: "admin/gallery-category",
    title: "Gallery Category",
    icon: <Collections />,
  },
  {
    segment: "admin/partner",
    title: "Partners",
    icon: <Handshake />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#1976d2",
        },
        text: {
          primary: "#333",
        },
        background: {
          default: "#f5f5f5",
        },
        action: {
          active: "red", // Change toggle icon color
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#bb86fc",
        },
        text: {
          primary: "#fff",
        },
        background: {
          default: "#121212",
        },
        action: {
          active: "white", // Change toggle icon color for dark mode
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Layout({children}) {
  const router = useDemoRouter("/dashboard");
  const {user} = useContext(AuthContext)
  return (
    // preview-start
    <AppProvider
      // navigation={NAVIGATION.filter((item)=>{item.allowedRole !== user.role})}
      navigation={NAVIGATION.filter((item) =>  !item.allowedRole || item.allowedRole.includes(user?.role))}
      branding={{
        logo: <img src="/Images/logo.png" alt="Ibfbi logo" />,
        title: <span style={{ color: "red" }}>IBFBI</span>,
        homeUrl: "/",
      }}
      theme={demoTheme}
    >
      <DashboardLayout>
        <div style={{padding:'30px'}}>{children}
        </div>
        
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

export default Layout;
