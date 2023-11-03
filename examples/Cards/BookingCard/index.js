

import Image from "next/image";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDAvatar from "/components/MDAvatar";

function BookingCard({ image, title, description, price, location, action, authors=[] }) {
 
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <MDAvatar
        src={media.src || media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

 
  return (
    <Card
      sx={{
        "&:hover .card-header": {
          transform: action && "translate3d(0, -50px, 0)",
        },
      }}
    >
      <MDBox
        position="relative"
        borderRadius="lg"
        mt={-3}
        mx={2}
        className="card-header"
        sx={{ transition: "transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1)" }}
      >
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="relative"
          zIndex={1}
          overflow="hidden"
        >
          {image.src ? (
            <Image
              src={image}
              alt={title}
              size="100%"
              quality={100}
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          ) : (
            image
          )}
        </MDBox>
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top="0"
          sx={{
            backgroundImage: `url(${image.src || image.props.src.src})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MDBox>
      <MDBox textAlign="center" pt={3} px={3}>
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={action ? -8 : -4.25}
        >
          {action}
        </MDBox>
        <MDTypography variant="h5" fontWeight="regular" sx={{ mt: 4 }}>
          {title}
        </MDTypography>
        <MDTypography variant="body2" color="text" sx={{ mt: 1.5, mb: 1 }}>
          {description}
        </MDTypography>
      </MDBox>
      <Divider />
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={0.5}
        pb={3}
        px={3}
        lineHeight={1}
      >
        <MDTypography variant="body2" fontWeight="regular" color="text">
          {price}
        </MDTypography>
        <MDBox color="text" display="flex" alignItems="center">
          <Icon color="inherit" sx={{ m: 0.5 }}>
            place
          </Icon>
          <MDTypography variant="button" fontWeight="light" color="text">
            {location}
          </MDTypography>
        </MDBox>
        <MDBox display="flex">{renderAuthors}</MDBox>

      </MDBox>
    </Card>
  );
}

// Setting default values for the props of BookingCard
BookingCard.defaultProps = {
  action: false,
  authors: [],
};

// Typechecking props for the BookingCard
BookingCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.node.isRequired,
  action: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default BookingCard;
