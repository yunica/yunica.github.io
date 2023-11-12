import { useState, useEffect } from "react";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types"; // @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import { fetchSimpleIcons } from "react-icon-cloud";
import { SvgIcon } from "@mui/material";

const CustomSvgIcon = ({ svgPath, color }) => (
  <SvgIcon>
    <path d={svgPath} fill={color} />
  </SvgIcon>
);

const RenderTags = ({ iconImage }) => {
  if (!(iconImage && iconImage.length > 0)) return null;
console.log(iconImage)

  const iconImageFilter = iconImage.filter(
    (i) => i.path && i.path !== "Co"
  );

  return (
    <AvatarGroup total={iconImageFilter.length}>
      {iconImageFilter.map((icon) => (
        <Tooltip key={icon.slug} title={icon.slug} placeholder="bottom">
          <Avatar
            alt={icon.slug}
            size="xs"
            sx={{
              width: 24,
              height: 24,
            }}
          >
            <CustomSvgIcon svgPath={icon.path} color={icon.hex} />
          </Avatar>
        </Tooltip>
      ))}
    </AvatarGroup>
  );
};

function BookingCard({ image, title, description, category }) {
  const [iconImage, setIconImage] = useState(null);

  useEffect(() => {
    if (category && category.length) {
      fetchSimpleIcons({ slugs: category }).then(({ simpleIcons }) => {
        setIconImage(Object.values(simpleIcons));
      });
    }
  }, [category]);

  return (
    <Card
      sx={{
        "&:hover .card-header": {
          transform: "translate3d(0, -50px, 0)",
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
          width={"100%"}
          height="100%"
          position="relative"
          zIndex={1}
          overflow="hidden"
        >
          <Image
            src={image}
            alt={title}
            size="100%"
            width={100}
            height={100}
            quality={100}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
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
            backgroundImage: `url(${image})`,
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
          mt={-8}
        >
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
        <MDBox display="flex">
          <RenderTags iconImage={iconImage} />
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of BookingCard
BookingCard.defaultProps = {
  tags: [],
};

// Typechecking props for the BookingCard
BookingCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.node,
};

export default BookingCard;
