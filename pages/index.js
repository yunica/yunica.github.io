import { useRef, useState, useEffect } from "react";
// @mui material components
import Image from "next/image";
import MDBox from "/components/MDBox";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
// Images
import Grid from "@mui/material/Grid";
import Globe from "/pagesComponents/globe";

import profileBw from "/assets/images/profile/profile_main_bw-min.png";
import profileColor from "/assets/images/profile/profile_main_color-min.png";
import { Typography } from "@mui/material";

import { useMaterialUIController } from "/context";

function Main() {
  const [controller] = useMaterialUIController();

  const { darkMode } = controller;
  return (
    <DashboardLayout>
      <Grid maxWidth="100%" width="100%">
        <MDBox
          minWidth="700px"
          height="90%"
          position="absolute"
          right="15px"
          top="5%"
          display={{ sm: "none", md: "block" }}
        >
          <Globe />
        </MDBox>
        <MDBox direction="column" zIndex="0">
          <Grid container spacing={0}>
            <Grid item xs={8} md={7} xl={7}>
              <Grid container spacing={0}>
                <Grid
                  item
                  xs={12}
                  md={12}
                  xl={12}
                  style={{
                    width: "100%",
                    minHeight: "87vh",
                    maxHeight: "98vh",
                    height: "99vh",
                    position: "relative",
                  }}
                >
                  <Image
                    src={darkMode ? profileColor : profileBw}
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                    style={{
                      minHeight: "87vh",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  xl={12}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.8)",
                    marginTop: -100
                  }}
                >
                  <Typography> Junior G. Flores Martinez</Typography>
                  <Typography> Geospatial data engineer</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MDBox>
      </Grid>
    </DashboardLayout>
  );
}

export default Main;
