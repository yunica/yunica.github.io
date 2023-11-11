import {
  Public,
  DatasetLinked,
  PieChartOutline,
  Code,
  FilterDrama,
  Terminal,
} from "@mui/icons-material";
import photoSkate1 from "/assets/images/skate_4.jpeg";
import photoTriump from "/assets/images/moto_triump.jpeg";
import photoTraveJump from "/assets/images/travel_2.jpeg";

export const experience = [
  {
    icon: "notifications",
    title: "Geospatial data engineer",
    dateTime: "Oct, 2019 - current",
    description:
      "Desarolle herramientas y tuberias de datos para diferentes proyectos en Development Seed.",
    detail: "",
  },
  {
    icon: "data_object",
    title: "Cadastre assistant",
    dateTime: "Feb, 2019 - Oct, 2019",
    description:
      "Me encargue de desarollar una aplicacion  espacial de catastro en SEDA Ayacucho",
    detail: "",
  },
  {
    icon: "data_object",
    title: "Full stack developer",
    dateTime: "Oct, 2018 - current",
    description:
      "Desarrollo productos a medida con diferentes instituciones, freelance",
    detail: "",
  },
  {
    icon: "school",
    title: "Systems Engineer",
    dateTime: "Jan, 2018 - Aug, 2018 ",
    description: "Universidad Nacional de San Cristóbal de Huamanga",
    detail: "",
  },
];

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 3,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    tooltipDelay: 0,
    outlineColour: "#0000",
    wheelZoom: false,
  },
};

export const expertice = [
  {
    type: "collapse",
    name: "Geospatial process",
    key: "Geospatial",
    icon: <Public color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Extract, transform and load (ETL)",
    key: "etl",
    icon: <DatasetLinked color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Data visualization",
    key: "data-visualization",
    icon: <PieChartOutline color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Backend developer",
    key: "backend-developer",
    icon: <Code color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Cloud services",
    key: "cloud-services",
    icon: <FilterDrama color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Bash fan",
    key: "bash-fan",
    icon: <Terminal color="inherit" />,
    noCollapse: true,
  },
];

export const hobbiesConstant = [
  {
    image: photoSkate1,
    title: "Skateboarding",
    description:
      "Skateboarding is my art of movement since 2007, driving me to overcome obstacles with persistence and enjoy the camaraderie among peers. Favorite trick: Fakie Frontside 360 Heelflip.",
    images: [photoSkate1, photoTraveJump, photoTriump],
  },
  {
    image: photoTraveJump,
    title: "Amateur traveler",
    description:
      "Curious explorer, every journey is an opportunity to learn and unwind. From my first solo adventure to the upcoming Eurotrip, I mix planning with improvisation for a complete experience.",
  },
  {
    image: photoSkate1,
    title: "Photo lover",
    description:
      "Photography for me is about capturing the essence of the moment, whether it's the smile of a stranger or the silhouette of a building. Each image tells a story.",
  },
  {
    image: photoTriump,
    title: "Biker",
    description:
      "On my custom bike, each route is a new story. Whether it's a challenging ride in the rain or a calm cruise.",
  },
  {
    image: photoSkate1,
    title: "Cinephile",
    description:
      "A film buff with diverse tastes, I seek out movies that make an impact. I prefer the personal experience of watching films at home, though I never miss the big premieres in theaters.",
  },
  {
    image: photoSkate1,
    title: "Bookworm",
    description:
      "Reading is synonymous with personal balance for me, with 'Ikigai' currently on my nightstand and a love for fiction that sparks imagination. I always opt for the touch and smell of a physical book.",
  },
];
