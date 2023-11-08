import { useState, useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";

// cloud icons
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";

// Overview page components
import Header from "/pagesComponents/pages/profile/components/Header";
import TimelineList from "/examples/Timeline/TimelineList";
import TimelineItem from "/examples/Timeline/TimelineItem";

// Data
import { experience, expertice } from "/utils/constants";
import { useMaterialUIController } from "/context";

// Images
import SocialContact from "/pagesComponents/social/contact";
import ListSkill from "/pagesComponents/social/skills";
import DynamicCloud from "/pagesComponents/about/icon-cloud";

function About() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const renderTimelineItems = experience.map(
    ({ color, icon, title, dateTime, description }, k) => (
      <TimelineItem
        key={title + color}
        icon={icon}
        title={title}
        dateTime={dateTime}
        description={description}
        lastItem={k === experience.length - 1}
      />
    )
  );

  const slugs = [
    "amazonaws",
    "android",
    "androidstudio",
    "antdesign",
    "typescript",
    "vercel",
    "visualstudiocode",
  ];
   const onClickEvent = (ev) => {
    ev.preventDefault();
    console.log(ev);
  };

  return (
    <DashboardLayout>
      <MDBox mb={2} />
      <Header>
        <MDBox mt={3} mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={{ height: "100%", boxShadow: "none" }}>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    <MDTypography
                      variant="span"
                      fontWeight="bold"
                      opacity={0.7}
                    >
                      01{" "}
                    </MDTypography>
                    About me
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox mb={1} lineHeight={1}>
                    <MDTypography
                      variant="button"
                      color="text"
                      fontWeight="light"
                    >
                      As a Geo-Spatial Data Engineer, I am zealous about turning
                      algorithms and data into impactful solutions. My technical
                      prowess spans backend development to geoprocessing and
                      CI/CD. An active contributor and speaker in the
                      OpenStreetMap community, my goal is to innovate and create
                      meaningful change.
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    <MDTypography
                      variant="span"
                      fontWeight="bold"
                      opacity={0.7}
                    >
                      02{" "}
                    </MDTypography>{" "}
                    Interests and Hobbies
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox mb={1} lineHeight={1}>
                    <MDTypography
                      variant="button"
                      color="text"
                      fontWeight="light"
                    >
                      Beyond the realm of geospatial data, I am a travel
                      enthusiast capturing the globe through my camera&apos;s
                      lens and the narratives of cinema, always seeking fresh
                      perspectives. As a skater, I relish the freedom of
                      movement; as a biker, the joy of discovering new paths. In
                      quieter times, I indulge in the strategic depths of
                      reading and the camaraderie of board games.
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    <MDTypography
                      variant="span"
                      fontWeight="bold"
                      opacity={0.7}
                    >
                      03{" "}
                    </MDTypography>{" "}
                    get in touch
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <SocialContact />
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <Card sx={{ height: "100%", boxShadow: "none" }}>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    <MDTypography
                      variant="span"
                      fontWeight="bold"
                      opacity={0.7}
                    >
                      04{" "}
                    </MDTypography>
                    My allies
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox lineHeight={1}>
                    <DynamicCloud iconSlugs={slugs} id="DynamicCloud-about" onclickEvent={onClickEvent}/>
                  </MDBox>
                </MDBox>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    <MDTypography
                      variant="span"
                      fontWeight="bold"
                      opacity={0.7}
                    >
                      05{" "}
                    </MDTypography>
                    My expertice
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox lineHeight={1}>
                    <ListSkill data={expertice} />
                  </MDBox>
                </MDBox>
              </Card>
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <TimelineList
                title="Where I have worked"
                dark={darkMode}
                shadow={false}
              >
                {renderTimelineItems}
              </TimelineList>
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default About;
