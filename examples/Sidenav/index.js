import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types"; // @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDAvatar from "/components/MDAvatar";

// Custom examples
import SidenavCollapse from "/examples/Sidenav/SidenavCollapse";
import SidenavList from "/examples/Sidenav/SidenavList";
import SidenavItem from "/examples/Sidenav/SidenavItem";

// Custom styles for the Sidenav
import SidenavRoot from "/examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "/examples/Sidenav/styles/sidenav";

// Custom context
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setDarkMode,
} from "/context";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [openNestedCollapse, setOpenNestedCollapse] = useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } =
    controller;
  const { pathname } = useRouter();
  const collapseName = pathname.split("/").slice(1)[0];
  const items = pathname.split("/").slice(1);
  const itemParentName = items[1];
  const itemName = items[items.length - 1];

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    setOpenCollapse(collapseName);
    setOpenNestedCollapse(itemParentName);
  }, [collapseName, itemParentName]);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, true);
      setTransparentSidenav(
        dispatch,
        window.innerWidth < 1200 ? false : transparentSidenav
      );
      setWhiteSidenav(
        dispatch,
        window.innerWidth < 1200 ? false : whiteSidenav
      );
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, transparentSidenav, whiteSidenav]);

  // Render all the nested collapse items from the routes.js
  const renderNestedCollapse = (collapse) => {
    const template = collapse.map(({ name, route, key, href }) =>
      href ? (
        <MuiLink
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavItem name={name} nested />
        </MuiLink>
      ) : (
        <Link href={route} key={key} sx={{ textDecoration: "none" }}>
          <SidenavItem name={name} active={route === pathname} nested />
        </Link>
      )
    );

    return template;
  };
  // Render the all the collpases from the routes.js
  const renderCollapse = (collapses) =>
    collapses.map(({ name, collapse, route, href, key }) => {
      let returnValue;

      if (collapse) {
        returnValue = (
          <SidenavItem
            key={key}
            color={color}
            name={name}
            active={key === itemParentName ? "isParent" : false}
            open={openNestedCollapse === key}
            onClick={({ currentTarget }) =>
              openNestedCollapse === key &&
              currentTarget.classList.contains("MuiListItem-root")
                ? setOpenNestedCollapse(false)
                : setOpenNestedCollapse(key)
            }
          >
            {renderNestedCollapse(collapse)}
          </SidenavItem>
        );
      } else {
        returnValue = href ? (
          <MuiLink
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavItem color={color} name={name} active={key === itemName} />
          </MuiLink>
        ) : (
          <Link href={route} key={key} sx={{ textDecoration: "none" }}>
            <SidenavItem color={color} name={name} active={key === itemName} />
          </Link>
        );
      }
      return <SidenavList key={key}>{returnValue}</SidenavList>;
    });

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(
    ({ type, name, icon, title, collapse, noCollapse, key, href, route }) => {
      let returnValue;

      if (type === "collapse") {
        if (href) {
          returnValue = (
            <MuiLink
              href={href}
              key={key}
              target="_blank"
              rel="noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <SidenavCollapse
                name={name}
                icon={icon}
                active={key === collapseName}
                noCollapse={noCollapse}
              />
            </MuiLink>
          );
        } else if (noCollapse && route) {
          returnValue = (
            <Link href={route} key={key} passHref>
              <SidenavCollapse
                name={name}
                icon={icon}
                noCollapse={noCollapse}
                active={key === collapseName}
              >
                {collapse ? renderCollapse(collapse) : null}
              </SidenavCollapse>
            </Link>
          );
        } else {
          returnValue = (
            <SidenavCollapse
              key={key}
              name={name}
              icon={icon}
              active={key === collapseName}
              open={openCollapse === key}
              onClick={() =>
                openCollapse === key
                  ? setOpenCollapse(false)
                  : setOpenCollapse(key)
              }
            >
              {collapse ? renderCollapse(collapse) : null}
            </SidenavCollapse>
          );
        }
      } else if (type === "title") {
        returnValue = (
          <MDTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </MDTypography>
        );
      } else if (type === "divider") {
        returnValue = (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        );
      }

      return returnValue;
    }
  );

  const isHome = pathname === "/";
  const modeIco = darkMode ? (
    <Icon fontSize="medium">light_mode</Icon>
  ) : (
    <Icon fontSize="medium">dark_mode</Icon>
  );
  const handleDarkMode = () => setDarkMode(dispatch, !darkMode);

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </MDTypography>
        </MDBox>
        {!isHome && (
          <Link href="/">
            <MDBox display="flex" alignItems="center" justifyContent="center">
              {brand && brand.src && (
                <MDAvatar
                  src={brand.src}
                  alt={brandName}
                  size={miniSidenav ? "md" : "xxl"}
                />
              )}
            </MDBox>
          </Link>
        )}
      </MDBox>
      {!isHome && (
        <Divider
          light={
            (!darkMode && !whiteSidenav && !transparentSidenav) ||
            (darkMode && !transparentSidenav && whiteSidenav)
          }
        />
      )}
      <List>
        {renderRoutes}
        <Link
          href=""
          component="button"
          variant="body2"
          onClick={handleDarkMode}
        >
          <SidenavCollapse
            name={`${darkMode ? "Light" : "Dark"} mode`}
            icon={modeIco}
            noCollapse={true}
            active={false}
          />
        </Link>
      </List>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "dark",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  brand: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
