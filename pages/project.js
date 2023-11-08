import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

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
import DynamicCloud from "/pagesComponents/about/iconCloud";

import avatarPhoto from "/assets/images/profile.jpeg";
import DefaultInfoCard from "/examples/Cards/InfoCards/DefaultInfoCard";

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
  const onClickEvent = (ev) => {
    ev.preventDefault();
    console.log(ev);
  };

  console.log(data);
  const slugs = [...new Set([].concat(...data.map((i) => i.category)))];

  const renderProjects = data.map((feature) => (
    <Grid item xs={12} md={4} lg={3} key={feature.filename}>
      <MDBox mt={3}>
        <BookingCard
          image={feature.image}
          title={feature.title}
          description={feature.description}
          category={feature.category}
          tags={[
            { image: avatarPhoto, name: "Nick Daniel" },
            { image: avatarPhoto, name: "Peterson" },
            { image: avatarPhoto, name: "Elena Morison" },
            { image: avatarPhoto, name: "Ryan Milly" },
          ]}
        />
      </MDBox>
    </Grid>
  ));

  return (
    <DashboardLayout>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <DefaultInfoCard
              icon="filter_alt"
              title="Filter by tags"
              description={
                <DynamicCloud
                  iconSlugs={slugs}
                  id="DynamicCloud-filter"
                  onclickEvent={onClickEvent}
                />
              }
            />
          </Grid>
          {renderProjects}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Project;
