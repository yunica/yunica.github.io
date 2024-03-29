import Link from "next/link";
import Image from "next/image";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types"; 
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

function SimpleBlogCard({ image, title, description, action, onClickImage }) {
  const renderAction =
    action &&
    (action.type === "external" ? (
      <MuiLink href={action.route} target="_blank" rel="noreferrer">
        <MDButton color={action.color ? action.color : "dark"}>
          {action.label}
        </MDButton>
      </MuiLink>
    ) : (
      <Link href={action.route}>
        <MDButton color={action.color ? action.color : "dark"}>
          {action.label}
        </MDButton>
      </Link>
    ));
  return (
    <Card>
      <MDBox position="relative" borderRadius="lg" mt={-3} mx={2}>
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          maxHeight="300px"
          position="relative"
          zIndex={1}
          overflow="hidden"
        >
          <div style={{ height: "100%", overflowY: "auto" }}>
            {image.src ? (
              <Image
                onClick={onClickImage}
                src={image}
                alt="Junior Flores - Geospatial Data Engineer"
                size="100%"
                quality={100}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            ) : (
              image
            )}
          </div>
        </MDBox>
      </MDBox>

      <MDBox p={2}>
        <MDTypography
          display="inline"
          variant="h5"
          textTransform="capitalize"
          fontWeight="bold"
        >
          {title}
        </MDTypography>
        <MDBox mt={2} mb={2}>
          <MDTypography variant="body2" component="p" color="text">
            {description}
          </MDTypography>
        </MDBox>
        {renderAction}
      </MDBox>
    </Card>
  );
}

// Typechecking props for the SimpleBlogCard
SimpleBlogCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClickImage: PropTypes.func,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
      "default",
    ]),
    label: PropTypes.string.isRequired,
  }),
};

export default SimpleBlogCard;
