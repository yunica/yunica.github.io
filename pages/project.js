import { useState } from "react";
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
      category: [],
      ...data,
      contentHtml,
    };
  });
  const data = await Promise.all(dataPromises);
  
  const data_ = data.filter((a) => !a.draft).sort((a, b) =>   a.order-b.order);
  return { props: { data: data_ } };
}

function Project({ data }) {

  const renderProjects = data
    .map((feature) => (
      <Grid item xs={12} md={4} lg={3} key={feature.filename}>
        <MDBox mt={3}>
          <BookingCard image={feature.image} {...feature} />
        </MDBox>
      </Grid>
    ));

  return (
    <DashboardLayout>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          {renderProjects}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Project;
