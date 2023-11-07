import { useRef, useState, useEffect } from "react";
// @mui material components
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material";
// Custom components
import MDBox from "/components/MDBox";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import { Paper } from "@mui/material";
// Images
// import { Box, Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const iconBoxInside = "inherit";
import Globe from "/pagesComponents/globe";

function Main() {
  return (
    <DashboardLayout>
      <Grid
        templateColumns={{ sm: "4fr 1fr", xl: "1.2fr 1fr" }}
        maxWidth="100%"
        width="100%"
      >
        <MDBox
          minWidth="700px"
          height="80%"
          position="absolute"
          right="30px"
          top="5%"
          display={{ sm: "none", md: "block" }}
        >
          <Globe />
        </MDBox>
        <MDBox
          direction="column"
          zIndex="0"
        >
          <Grid container spacing={0}>
            <Grid item xs={8} md={7} xl={7}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={4}>
                  <h1> daasdasd</h1>
                  <h1> daasdasd</h1>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <h1> daasdasd</h1>
                  <h1> daasdasd</h1>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <h1> daasdasd</h1>
                  <h1> daasdasd</h1>
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
