import { useState, useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";

// cloud icons
import {
  Cloud,
  renderSimpleIcon,
  fetchSimpleIcons,
  SimpleIcon,
} from "react-icon-cloud";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";

// Overview page components
import Header from "/pagesComponents/pages/profile/components/Header";
import TimelineList from "/examples/Timeline/TimelineList";
import TimelineItem from "/examples/Timeline/TimelineItem";

// Data
import { experience, cloudProps , expertice} from "/utils/constants";
import { useMaterialUIController } from "/context";

// Images
import SocialContact from "/pagesComponents/social/contact";
import ListSkill from "../pagesComponents/social/skills";

const useIcons = (slugs) => {
  const [icons, setIcons] = useState();
  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(({ simpleIcons }) =>
      setIcons(Object.values(simpleIcons))
    );
  }, []);

  if (icons) {
    return icons.map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e) => {
            e.preventDefault();
            console.log(e);
          },
        },
      })
    );
  }

  return <a>Loading</a>;
};

function About() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const renderTimelineItems = experience.map(
    ({ color, icon, title, dateTime, description }, k) => (
      <TimelineItem
        key={title + color}
        icon={icon}
        title={title}
        dateTime={dateTime}
        description={description}
        lastItem={k === experience.length - 1}
      />
    )
  );
  const slugs = [
    "amazonaws",
    "android",
    "androidstudio",
    "antdesign",
    "typescript",
    "vercel",
    "visualstudiocode",
  ];

  const icons = useIcons(slugs);

  const dinamCloud = (
    <Cloud id="id-dinam-cloud" {...cloudProps}>
      {icons}
    </Cloud>
  );

  return (
    <DashboardLayout>
      <MDBox mb={2} />
      <Header>
        <MDBox mt={3} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={{ height: "100%", boxShadow: "none" }}>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    <MDTypography
                      variant="span"
                      fontWeight="bold"
                      opacity={0.7}
                    >
                      01{" "}
                    </MDTypography>
                    About me
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox mb={1} lineHeight={1}>
                    <MDTypography
                      variant="button"
                      color="text"
                      fontWeight="light"
                    >
                      Soy un Ingeniero de Datos Geoespaciales apasionado por
                      transformar algoritmos y datos en soluciones con impacto
                      real. Mi expertise abarca desde desarrollo backend hasta
                      geoprocesamiento y CI/CD. Activo colaborador y ponente en
                      la comunidad de OpenStreetMap, busco innovar y generar
                      impacto.
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    <MDTypography
                      variant="span"
                      fontWeight="bold"
                      opacity={0.7}
                    >
                      02{" "}
                    </MDTypography>{" "}
                    Interests and Hobbies
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox mb={1} lineHeight={1}>
                    <MDTypography
                      variant="button"
                      color="text"
                      fontWeight="light"
                    >
                      Fuera del entorno de los datos geoespaciales, mi pasión
                      por viajar me lleva a capturar el mundo a través del lente
                      de mi cámara y las historias del cine, buscando siempre
                      nuevas perspectivas y narrativas. Como skater, encuentro
                      libertad en el movimiento, y como motociclista, el gozo de
                      explorar caminos desconocidos. En momentos de pausa,
                      disfruto de la lectura, táctica y el compañerismo en los
                      juegos de mesa.
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    <MDTypography
                      variant="span"
                      fontWeight="bold"
                      opacity={0.7}
                    >
                      03{" "}
                    </MDTypography>{" "}
                    get in touch
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <SocialContact />
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <Card sx={{ height: "100%", boxShadow: "none" }}>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    <MDTypography
                      variant="span"
                      fontWeight="bold"
                      opacity={0.7}
                    >
                      04{" "}
                    </MDTypography>
                    My allies
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox lineHeight={1}>{dinamCloud}</MDBox>
                </MDBox>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={2}
                  px={2}
                >
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    textTransform="uppercase"
                  >
                    <MDTypography
                      variant="span"
                      fontWeight="bold"
                      opacity={0.7}
                    >
                      05{" "}
                    </MDTypography>
                    My expertice
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox lineHeight={1}><ListSkill data={expertice} /></MDBox>
                </MDBox>
              </Card>
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <TimelineList
                title="Where I have worked"
                dark={darkMode}
                shadow={false}
              >
                {renderTimelineItems}
              </TimelineList>
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default About;
