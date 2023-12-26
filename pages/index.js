// @mui material components
import Image from "next/image";
import MDBox from "/components/MDBox";
import MDButton from "/components/MDButton";
import MuiLink from "@mui/material/Link";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DefaultInfoCard from "/examples/Cards/InfoCards/DefaultInfoCard";
// Images
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Globe from "/pagesComponents/globe";
import Icon from "@mui/material/Icon";

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
          <Globe width={800} height={800} />
        </MDBox>
        <MDBox direction="column" zIndex="0">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={8}
              xl={8}
              style={{ position: "relative", minHeight: "100vh" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "auto",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    height: "90%",
                    minWidth: "40%",
                    maxWidth: "70%",
                  }}
                >
                  <Image
                    src={profileColor}
                    alt="Junior Flores - Geospatial Data Engineer"
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                    objectPosition="top"
                  />
                </Box>
                <Grid container spacing={1} zIndex={1}>
                  <Grid item md={12} mt={3}>
                    <MDTypography
                      variant="h1"
                      fontWeight="bold"
                      textTransform="uppercase"
                      textGradient={true}
                      color={darkMode ? "primary" : "primary"}
                    >
                      Junior Flores
                    </MDTypography>
                  </Grid>

                  <Grid item md={12}>
                    <MDTypography
                      variant="h3"
                      fontWeight="regular"
                      textTransform="uppercase"
                      textGradient={darkMode}
                      color={darkMode ? "primary" : "primary"}
                    >
                      Geospatial data engineer
                    </MDTypography>
                  </Grid>
                  <Grid item md={12}>
                    <Card>
                      <MDBox p={2}>
                        <MDTypography
                          variant="body2"
                          color="dark"
                          fontWeight="light"
                        >
                          I am a Data Engineer specialized in Geospatial
                          Information Systems (GIS), with extensive experience
                          in developing optimized ETL (Extract, Transform, Load)
                          processes and in creating tools for generating data
                          for Machine Learning. As a Data Engineer, I am
                          committed to refining data pipelines, effectively
                          transforming raw data into essential resources for
                          various applications.
                          <br />
                          The <b>backend</b> is my safe zone.
                        </MDTypography>
                      </MDBox>
                    </Card>
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <DefaultInfoCard
                      icon="insights"
                      title="+5"
                      description="Years of experience "
                    />
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <DefaultInfoCard
                      icon="work"
                      title="+26"
                      description="Projects completed"
                    />
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <DefaultInfoCard
                      icon="terminal"
                      title="+3"
                      description="Open source packages"
                    />
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <DefaultInfoCard
                      color="success"
                      iconLink={
                        <MuiLink
                          href="/junior-flores-cv.pdf"
                          target="_blank"
                          rel="noreferrer"
                          download
                        >
                          <Icon fontSize="large">description</Icon>
                        </MuiLink>
                      }
                      title="pdf"
                      description="Download resume"
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </MDBox>
      </Grid>
    </DashboardLayout>
  );
}

export default Main;
