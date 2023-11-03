import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

// Custom components
import MDBox from "/components/MDBox";

// Settings page components
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import BookingCard from "/examples/Cards/BookingCard";
import Filter from "/pagesComponents/project/Filter";
// NextJS Material Dashboard 2 PRO components
import MDTypography from "/components/MDTypography";

// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Images
import booking1 from "/assets/images/products/product-1-min.jpg";
import booking2 from "/assets/images/products/product-2-min.jpg";
import booking3 from "/assets/images/products/product-3-min.jpg";

import team1 from "/assets/images/team-1.jpg";
import team2 from "/assets/images/team-2.jpg";
import team3 from "/assets/images/team-3.jpg";
import team4 from "/assets/images/team-4.jpg";

function Project() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/markdown");
        setData(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

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
