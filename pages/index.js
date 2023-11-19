// @mui material components
import Image from "next/image";
import MDBox from "/components/MDBox";
import MDButton from "/components/MDButton";
import MuiLink from "@mui/material/Link";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
// Images
import Grid from "@mui/material/Grid";
import Globe from "/pagesComponents/globe";
import profileBw from "/assets/images/profile/profile_main_bw-min.png";
import profileColor from "/assets/images/profile/profile_main_color-min.png";
import { Card } from "@mui/material";
import MDTypography from "/components/MDTypography";
import { useMaterialUIController } from "/context";

function Main() {
  const [controller] = useMaterialUIController();

  const { darkMode } = controller;

  return (
    <DashboardLayout>
      <Grid maxWidth="100%" width="100%">
        <MDBox
          minWidth="700px"
          height="95%"
          position="absolute"
          right="5px"
          top="5%"
          display={{ sm: "none", md: "block" }}
        >
          <Globe />
        </MDBox>
        <MDBox direction="column" zIndex="0">
          <Grid
            container
            spacing={2}
            style={{ position: "relative", height: "97vh" }}
          >
            <Grid item xs={12} md={7} xl={7}>
              <div
                style={{ position: "relative", width: "auto", height: "100%" }}
              >
                <Image
                  src={darkMode ? profileColor : profileBw}
                  alt="Junior Flores - Geospatial Data Engineer"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  objectPosition="top"
                  style={{ height: "100%", minWidth: "60%" }}
                />
                <Card
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px",
                  }}
                  p={20}
                >
                  <MDTypography
                    variant="h1"
                    sx={{ fontSize: "1.5rem" }}
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Junior Flores
                  </MDTypography>
                  <MDTypography
                    variant="h2"
                    sx={{ fontSize: "1.25rem" }}
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    Geospatial data engineer
                  </MDTypography>
                  <MDTypography variant="body2" color="text" fontWeight="light">
                    I am an data engineer specialized in geospatial information
                    systems (GIS), skilled in building tools for generating
                    valuable data for machine learning (ML). I am committed to
                    refining data pipelines, effectively transforming raw data
                    into essential fuel for various applications. The backend is
                    my safe zone.
                  </MDTypography>
                  <MDBox mt={2}>
                    <MuiLink
                      href="/junior-flores-cv.pdf"
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      <MDButton color={darkMode ? "primary" : "dark"}>
                        Download resume
                      </MDButton>
                    </MuiLink>
                  </MDBox>
                </Card>
              </div>
            </Grid>
          </Grid>
        </MDBox>
      </Grid>
    </DashboardLayout>
  );
}

export default Main;
