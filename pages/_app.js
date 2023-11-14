import { useState, useEffect } from "react";
import Script from "next/script";

import Head from "next/head";
import { useRouter } from "next/router";

// @emotion
import createCache from "@emotion/cache";

// @emotion/react components
import { CacheProvider } from "@emotion/react"; // @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Custom components
import MDBox from "/components/MDBox";

// Custom examples
import Sidenav from "/examples/Sidenav";

// Custom themes
import theme from "/assets/theme";

// Custom Dark Mode themes
import themeDark from "/assets/theme-dark";

// Custom routes
import routes from "/utils/routes";

// Custom Context Provider
import {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setOpenConfigurator,
  setDarkMode,
} from "/context";

// Images
import favicon from "/assets/images/favicon-16.png";
import favicon32 from "/assets/images/favicon-32.png";
import favicon96 from "/assets/images/favicon-96.png";
import appleIcon from "/assets/images/favicon-96.png";

import avatarPhoto from "/assets/images/profile.jpeg";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({ key: "css", prepend: true });

const ButtonContainer = ({ children }) => (
  <div
    style={{
      position: "fixed",
      right: "2rem",
      top: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      zIndex: 99,
    }}
  >
    {children}
  </div>
);

function Main({ Component, pageProps }) {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useRouter();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleDarkMode = () => setDarkMode(dispatch, !darkMode);

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer", marginBottom: "1rem" }}
      onClick={handleMiniSidenav}
    >
      <Icon fontSize="small" color="inherit">
        {miniSidenav ? "menu_open" : "menu"}
      </Icon>
    </MDBox>
  );
  const darkModeButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor={darkMode ? "white" : "dark"}
      shadow="sm"
      borderRadius="50%"
      zIndex={99}
      color={darkMode ? "dark" : "white"}
      sx={{ cursor: "pointer", marginBottom: "1rem" }}
      onClick={handleDarkMode}
    >
      <Icon fontSize="small" color="inherit">
        {darkMode ? "light_mode" : "dark_mode"}
      </Icon>
    </MDBox>
  );

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      <Component {...pageProps} />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={avatarPhoto}
            brandName="Junior Flores"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <ButtonContainer>
            {configsButton}
            {darkModeButton}
          </ButtonContainer>
        </>
      )}
    </ThemeProvider>
  );
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <MaterialUIControllerProvider>
      <CacheProvider value={emotionCache}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4EWKTJNZHV" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href={favicon.src} />
          <link type="image/png" sizes="16x16" rel="icon" href={favicon.src} />
          <link
            type="image/png"
            sizes="32x32"
            rel="icon"
            href={favicon32.src}
          />
          <link
            type="image/png"
            sizes="96x96"
            rel="icon"
            href={favicon96.src}
          />
          <link rel="apple-touch-icon" sizes="96x96" href={appleIcon.src} />
          <title>
            Junior Flores - Geospatial Data Engineer Specializing in GIS and ML
            Data Tools
          </title>
        </Head>
        <Main Component={Component} pageProps={pageProps} />
      </CacheProvider>
    </MaterialUIControllerProvider>
  );
}

export default MyApp;
