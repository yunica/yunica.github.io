// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";
import Footer from "/examples/Footer";
import ProfileInfoCard from "/examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "/examples/Lists/ProfilesList";
import DefaultProjectCard from "/examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "/pagesComponents/pages/profile/components/Header";
import PlatformSettings from "/pagesComponents/pages/profile/profile-overview/components/PlatformSettings";

// Data
import profilesListData from "/pagesComponents/pages/profile/profile-overview/data/profilesListData";

// Images
import homeDecor1 from "/assets/images/home-decor-1.jpg";
import homeDecor2 from "/assets/images/home-decor-2.jpg";
import homeDecor3 from "/assets/images/home-decor-3.jpg";
import homeDecor4 from "/assets/images/home-decor-4.jpeg";
import team1 from "/assets/images/team-1.jpg";
import team2 from "/assets/images/team-2.jpg";
import team3 from "/assets/images/team-3.jpg";
import team4 from "/assets/images/team-4.jpg";

function Main() {
  return (
    <DashboardLayout>
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
           
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
           
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
            
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Main;
