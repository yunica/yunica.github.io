import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import { useMaterialUIController } from "/context";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

const ListSkill = ({ data }) => {
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
      {data.map((item, itemKey) => (
        <MDBox key={itemKey} component="li">
          <MDTypography
            component="label"
            variant="body2"
            fontWeight="regular"
            size="sm"
            textTransform="none"
            sx={({
              borders: { borderRadius },
              functions: { pxToRem },
              palette: { light },
              transitions,
            }) => ({
              display: "flex",
              alignItems: "center",
              borderRadius: borderRadius.md,
              padding: `${pxToRem(8)} ${pxToRem(0)}`,
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
            <MDBox color={darkMode ? "white" : "dark"} fontSize="small" fontWeight={1}>
              <p>{item.name}</p>
              {item.links && (
                <label>
                  {item.links.map((link, k) => (
                    <MuiLink
                      key={k}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      download
                      mr={1}
                    >
                      <Tooltip
                        title={`link ${k + 1}`}
                      >
                        <Icon fontSize="medium">link</Icon>
                      </Tooltip>
                    </MuiLink>
                  ))}
                </label>
              )}
            </MDBox>
          </MDTypography>
        </MDBox>
      ))}
    </MDBox>
  );
};

export default ListSkill;
