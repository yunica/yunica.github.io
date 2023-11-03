

import { useState } from "react";// @mui material components
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDEditor from "/components/MDEditor";
import MDInput from "/components/MDInput";

// NewProduct page components
import FormField from "/pagesComponents/ecommerce/products/new-product/components/FormField";

function ProductInfo() {
  return (
    <MDBox>
      <MDTypography variant="h5">Product Information</MDTypography>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Weight" />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <MDBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <MDTypography
                component="label"
                variant="button"
                fontWeight="regular"
                color="text"
              >
                Description&nbsp;&nbsp;
                <MDTypography variant="caption" color="text">
                  (optional)
                </MDTypography>
              </MDTypography>
            </MDBox>
            <MDEditor />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MDBox mb={3}>
              <MDBox mb={2} display="inline-block">
                <MDTypography
                  component="label"
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  textTransform="capitalize"
                >
                  Category
                </MDTypography>
              </MDBox>
              <Autocomplete
                defaultValue="Clothing"
                options={[
                  "Clothing",
                  "Electronics",
                  "Furniture",
                  "Others",
                  "Real Estate",
                ]}
                renderInput={(params) => (
                  <MDInput {...params} variant="standard" />
                )}
              />
            </MDBox>
            <MDBox mb={2} display="inline-block">
              <MDTypography
                component="label"
                variant="button"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                Size
              </MDTypography>
            </MDBox>
            <Autocomplete
              defaultValue="Medium"
              options={[
                "Extra Large",
                "Extra Small",
                "Large",
                "Medium",
                "Small",
              ]}
              renderInput={(params) => (
                <MDInput {...params} variant="standard" />
              )}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default ProductInfo;
