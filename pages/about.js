import { useState, useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import MDButton from "/components/MDButton";

// pages/api/markdown.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
import { experience, expertice, contribution } from "/utils/constants";
import { useMaterialUIController } from "/context";

// Images
import SocialContact from "/pagesComponents/social/contact";
import ListSkill from "/pagesComponents/social/skills";

export async function getStaticProps() {
  const markdownDirectory = path.join(process.cwd(), "public", "markdown");
  const filenames = fs.readdirSync(markdownDirectory);

  const dataPromises = filenames.map(async (filename) => {
    const filePath = path.join(markdownDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      filename,
      ...data,
    };
  });
  const data = await Promise.all(dataPromises);

  // data.sort((a, b) => (a.date > b.date ? -1 : 1));
  return { props: { data } };
}

function About({ data }) {
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

  const slugs = [...new Set([].concat(...data.map((i) => i.category)))];
  const renderTechSkill = slugs.map((i) => (
    <MDButton
      key={i}
      size="small"
      color={darkMode ? "white" : "dark"}
      circular
      variant="outlined"
      sx={{ margin: "3px" }}
    >
      {i.replace("dot", ".").replace("amazon", "amazon ")}
    </MDButton>
  ));

  return (
    <DashboardLayout>
      <MDBox />
      <Header>
        <MDBox mt={2} mb={1}>
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
                    variant="h2"
                    sx={{ fontSize: "1rem" }}
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
                      color={darkMode ? "white" : "dark"}
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
                    variant="h2"
                    sx={{ fontSize: "1rem" }}
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
                    Tech skills
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox>{renderTechSkill}</MDBox>
                </MDBox>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h2"
                    sx={{ fontSize: "1rem" }}
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
                    variant="h2"
                    sx={{ fontSize: "1rem" }}
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
                    my expertice
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox lineHeight={1}>
                    <ListSkill data={expertice} />
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
                    variant="h2"
                    sx={{ fontSize: "1rem" }}
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
                    My contribution
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox lineHeight={1}>
                    <ListSkill data={contribution} />
                  </MDBox>
                </MDBox>
              </Card>
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <TimelineList title="MY CARRER" dark={darkMode} shadow={false}>
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
