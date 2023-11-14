import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import { socialRoute } from "/utils/routes";
import { useMaterialUIController } from "/context";

const SocialContact = ( ) => {

  const [controller] = useMaterialUIController();

  const { darkMode } = controller;

  return (
    <MDBox
      component="ul"
      width="100%"
      display="flex"
      flexDirection="column"
      m={0}
      sx={{ listStyle: "none" }}
      justifyContent="start"
    >
      {socialRoute.map((item, itemKey) => (
        <MDBox key={itemKey} component="li">
          <MDTypography
            component="a"
            href={item.href || "#"}
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            sx={({
              borders: { borderRadius },
              functions: { pxToRem },
              palette: { light },
              transitions,
            }) => ({
              display: "flex",
              alignItems: "center",
              borderRadius: borderRadius.md,
              padding: `${pxToRem(5)} ${pxToRem(16)}`,
              transition: transitions.create("background-color", {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.shorter,
              }),

              "&:hover": {
                backgroundColor: light.main,
              },
            })}
          >
            <MDBox lineHeight={1} color={darkMode ? "white" : "dark"} mr={1}>
              {item.icon}
            </MDBox>
            {item.name}
          </MDTypography>
        </MDBox>
      ))}
    </MDBox>
  );
};

export default SocialContact;
