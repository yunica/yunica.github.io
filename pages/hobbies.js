import Grid from "@mui/material/Grid";
import MDBox from "/components/MDBox";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import SimpleBlogCard from "/examples/Cards/BlogCards/SimpleBlogCard";

import imageOfficeDark from "/assets/images/office-dark.jpg";
import imageOfficeLighht from "/assets/images/office-light.jpg";
import { useMaterialUIController } from "/context";
function Hobbies() {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <DashboardLayout>
      <MDBox mt={2}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <SimpleBlogCard
              image={darkMode ? imageOfficeDark : imageOfficeLighht}
              title="Skateboarding"
              description="this is my sport"
            />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Hobbies;
