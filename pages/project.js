import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

// pages/api/markdown.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Custom components
import MDBox from "/components/MDBox";

// Settings page components
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import BookingCard from "/examples/Cards/BookingCard";
import Filter from "/pagesComponents/project/Filter";

import team1 from "/assets/images/team-1.jpg";
import team2 from "/assets/images/team-2.jpg";
import team3 from "/assets/images/team-3.jpg";
import team4 from "/assets/images/team-4.jpg";

export async function getStaticProps() {
  const markdownDirectory = path.join(process.cwd(), "public", "markdown");
  const filenames = fs.readdirSync(markdownDirectory);

  const dataPromises = filenames.map(async (filename) => {
    const filePath = path.join(markdownDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      filename,
      ...data,
      contentHtml,
    };
  });
  const data = await Promise.all(dataPromises);

  // data.sort((a, b) => (a.date > b.date ? -1 : 1));

  return { props: { data } };
}

function Project({ data }) {
  const renderProjects = data.map((feature) => (
    <Grid item xs={12} md={4} lg={3} key={feature.filename}>
      <MDBox mt={3}>
        <BookingCard
          image={feature.image}
          title={feature.title}
          description={feature.description}
          category={feature.category}
          tags={[
            { image: team3, name: "Nick Daniel" },
            { image: team4, name: "Peterson" },
            { image: team1, name: "Elena Morison" },
            { image: team2, name: "Ryan Milly" },
          ]}
        />
      </MDBox>
    </Grid>
  ));

  return (
    <DashboardLayout>
      <MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Filter />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          {renderProjects}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Project;
