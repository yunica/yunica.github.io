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
import { Link } from "@mui/material";
// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import { fetchSimpleIcons } from "react-icon-cloud";
import { SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const CustomSvgIcon = ({ svgPath, color }) => (
  <SvgIcon>
    <path d={svgPath} fill={color} />
  </SvgIcon>
);

const RenderTags = ({ iconImage }) => {
  if (!(iconImage && iconImage.length > 0)) return null;

  const iconImageFilter = iconImage.filter((i) => i.path && i.path !== "Co");

  return (
    <AvatarGroup max={iconImageFilter.length + 2}>
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

function BookingCard({ image, title, description, category, external_link, repo }) {
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
          width="100%"
          height="100%"
          maxHeight="200px"
          position="relative"
          zIndex={1}
          overflow="hidden"
        >
          <div style={{ height: "100%", overflowY: "auto" }}>
            <Image
              src={image}
              alt="Junior Flores - Geospatial Data Engineer"
              size="100%"
              width={100}
              height={100}
              quality={80}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </MDBox>
      </MDBox>
      <MDBox textAlign="center" pt={3} px={3}>
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={-8}
        >
          {external_link && (
            <Tooltip title="open link" placement="bottom">
              <MDTypography
                variant="body1"
                color="primary"
                lineHeight={1}
                sx={{ cursor: "pointer", mx: 3 }}
              >
                <Link href={external_link} target="_blank">
                  <Icon color="inherit">link</Icon>
                </Link>
              </MDTypography>
            </Tooltip>
          )}
          {repo && (
            <Tooltip title="open repo" placement="bottom">
              <MDTypography
                variant="body1"
                color="error"
                lineHeight={1}
                sx={{ cursor: "pointer", mx: 3 }}
              >
                <Link href={repo} target="_blank">
                  <GitHubIcon color="inherit" />
                </Link>
              </MDTypography>
            </Tooltip>
          )}
          <Tooltip title="view detail" placement="bottom">
            <MDTypography
              variant="body1"
              color="secondary"
              lineHeight={1}
              sx={{ cursor: "pointer", mx: 3 }}
            >
              <RemoveRedEyeIcon color="inherit" />
            </MDTypography>
          </Tooltip>
        </MDBox>
        <MDTypography variant="h2" fontWeight="regular" sx={{ mt: 4, fontSize: '1.25rem' }}>
          {title}
        </MDTypography>
        <MDTypography variant="body2" color="text" sx={{ mt: 1, mb: 1 }}>
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
  tagcategorys: [],
};

// Typechecking props for the BookingCard
BookingCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.node,
  external_link: PropTypes.string,
  repo: PropTypes.string,
};

export default BookingCard;
