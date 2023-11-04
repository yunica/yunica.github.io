import { useEffect } from "react";
import { useRouter } from "next/router";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Custom components
import MDBox from "/components/MDBox";
import Footer from "/examples/Footer";

// Custom context
import { useMaterialUIController, setLayout } from "/context";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const { pathname } = useRouter();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [dispatch, pathname]);

  return (
    <MDBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",

        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      <div style={{minHeight:'87vh'}}>{children}</div>
      <Footer />
    </MDBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
