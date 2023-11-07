import Grid from "@mui/material/Grid";
import MDBox from "/components/MDBox";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import SimpleBlogCard from "/examples/Cards/BlogCards/SimpleBlogCard";

import imageOfficeDark from "/assets/images/office-dark.jpg";
import imageOfficeLighht from "/assets/images/office-light.jpg";
import { useMaterialUIController } from "/context";

function Hobbies() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <DashboardLayout>
      <MDBox mt={2}>
        <Grid container spacing={4}>
          <Grid item xs={4} mb={2}>
            <SimpleBlogCard
              image={darkMode ? imageOfficeDark : imageOfficeLighht}
              title="Skateboarding"
              description="Skateboarding is my art of movement since 2007, driving me to overcome obstacles with persistence and enjoy the camaraderie among peers. Favorite trick: Fakie Frontside 360 Heelflip."
            />
          </Grid>
          <Grid item xs={4} mb={2}>
            <SimpleBlogCard
              image={darkMode ? imageOfficeDark : imageOfficeLighht}
              title="Amateur traveler"
              description="Curious explorer, every journey is an opportunity to learn and unwind. From my first solo adventure to the upcoming Eurotrip, I mix planning with improvisation for a complete experience."
            />
          </Grid>

          <Grid item xs={4} mb={2}>
            <SimpleBlogCard
              image={darkMode ? imageOfficeDark : imageOfficeLighht}
              title="Photo lover"
              description="Photography for me is about capturing the essence of the moment, whether it's the smile of a stranger or the silhouette of a building. Each image tells a story."
            />
          </Grid>
          <Grid item xs={4} mb={2}>
            <SimpleBlogCard
              image={darkMode ? imageOfficeDark : imageOfficeLighht}
              title="Biker"
              description="On my custom bike, each route is a new story. Whether it's a challenging ride in the rain or a calm cruise."
            />
          </Grid>
          <Grid item xs={4} mb={2}>
            <SimpleBlogCard
              image={darkMode ? imageOfficeDark : imageOfficeLighht}
              title="Cinephile"
              description="A film buff with diverse tastes, I seek out movies that make an impact. I prefer the personal experience of watching films at home, though I never miss the big premieres in theaters."
            />
          </Grid>
          <Grid item xs={4} mb={2}>
            <SimpleBlogCard
              image={darkMode ? imageOfficeDark : imageOfficeLighht}
              title="Bookworm"
              description="Reading is synonymous with personal balance for me, with 'Ikigai' currently on my nightstand and a love for fiction that sparks imagination. I always opt for the touch and smell of a physical book."
            />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Hobbies;
