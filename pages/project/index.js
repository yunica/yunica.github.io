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

function Project() {
  const actionButtons = (
    <>
      <Tooltip title="Refresh" placement="bottom">
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">refresh</Icon>
        </MDTypography>
      </Tooltip>
      <Tooltip title="Edit" placement="bottom">
        <MDTypography
          variant="body1"
          color="dark"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">edit</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

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
          <Grid item xs={12} md={4} lg={3}>
            <MDBox mt={3}>
              <BookingCard
                image={booking1}
                title="Cozy 5 Stars Apartment"
                description='The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
                price="$899/night"
                location="Barcelona, Spain"
                action={actionButtons}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <MDBox mt={3}>
              <BookingCard
                image={booking2}
                title="Office Studio"
                description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.'
                price="$1.119/night"
                location="London, UK"
                action={actionButtons}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <MDBox mt={3}>
              <BookingCard
                image={booking3}
                title="Beautiful Castle"
                description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.'
                price="$459/night"
                location="Milan, Italy"
                action={actionButtons}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Project;
