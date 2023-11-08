// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";
// Wizard application components
import FormField from "/pagesComponents/applications/wizard/components/FormField";
import { useMaterialUIController } from "/context";

import SocialContact from "/pagesComponents/social/contact";

function Contact() {
  const [controller] = useMaterialUIController();

  const { darkMode } = controller;

  return (
    <DashboardLayout>
      <MDBox pt={3} pb={6}>
        <Grid container justifyContent="center" sx={{ my: 4 }}>
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox
                mt={-3}
                mx={2}
                variant="gradient"
                bgColor="dark"
                borderRadius="lg"
                coloredShadow="dark"
                p={2}
                mb={1}
                textAlign="center"
              >
                <MDTypography
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  mt={1}
                >
                  Get in touch
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <MDBox m1={2}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={5} container justifyContent="center">
                      <MDBox mb={1}>
                        <MDTypography variant="h5" fontWeight="regular">
                          Let&apos;s talk about your project
                        </MDTypography>
                        <MDTypography variant="body2" color="text" mt={2}>
                          Thinking about a new project, a problem to solve, or
                          just want to connect? Let&apos;s do it!
                        </MDTypography>
                        <MDTypography variant="body2" color="text" mt={2}>
                          Use the form on this page or get in touch by other
                          means.
                        </MDTypography>
                      </MDBox>
                      <MDBox
                        component="ul"
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        m={0}
                        sx={{ listStyle: "none" }}
                        justifyContent="start"
                      >
                        <SocialContact />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                          <FormField type="text" label="Full Name" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <FormField type="text" label="Company" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormField type="email" label="Email Address" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormField type="tel" label="Phone" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormField type="text" label="Service" />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <FormField
                            type="text"
                            multiline
                            rows={3}
                            label="Description"
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} mt={2} mb={2}>
                          <MDBox
                            width="100%"
                            display="flex"
                            justifyContent="center"
                          >
                            <MDButton
                              type="submit"
                              variant="gradient"
                              color="dark"
                            >
                              Send
                            </MDButton>
                          </MDBox>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Contact;
