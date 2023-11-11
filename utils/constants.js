import {
  Public,
  DatasetLinked,
  PieChartOutline,
  Code,
  FilterDrama,
  Terminal,
} from "@mui/icons-material";
// skate
import skate from "/assets/images/skate.jpeg";
import skate1 from "/assets/images/skate_1.jpeg";
import skate2 from "/assets/images/skate_2.jpeg";
import skate3 from "/assets/images/skate_3.png";
import skate4 from "/assets/images/skate_4.jpg";
// traveler
import travel from "/assets/images/travel.jpeg";
import travel1 from "/assets/images/travel_1.jpeg";
import travel2 from "/assets/images/travel_2.jpeg";
import travel3 from "/assets/images/travel_3.jpeg";
import travel4 from "/assets/images/travel_4.jpeg";
import travel5 from "/assets/images/travel_5.jpeg";
import travel6 from "/assets/images/travel_6.jpeg";
import travel7 from "/assets/images/travel_7.jpeg";
import travel8 from "/assets/images/travel_8.jpeg";

// photo
import photo from "/assets/images/photo.jpeg";
import photo0 from "/assets/images/photo_0.jpeg";
import photo1 from "/assets/images/photo_1.jpeg";
import photo2 from "/assets/images/photo_2.jpeg";
import photo3 from "/assets/images/photo_3.jpeg";
import photo4 from "/assets/images/photo_4.jpeg";
import photo5 from "/assets/images/photo_5.jpeg";
import photo6 from "/assets/images/photo_6.jpeg";

// read
import reader from "/assets/images/reader.jpeg";
// moto
import moto from "/assets/images/moto_1.jpeg";
// cine
import cine from "/assets/images/cine.jpeg";

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
    image: travel,
    title: "Amateur traveler",
    description:
      "Curious explorer, every journey is an opportunity to learn and unwind. From my first solo adventure to the upcoming Eurotrip, I mix planning with improvisation for a complete experience.",
    images: [
      travel,
      travel1,
      travel6,
      travel2,
      travel3,
      travel4,
      travel5,
      travel7,
      travel8,
    ],
  },
  {
    image: skate,
    title: "Skateboarding",
    description:
      "Skateboarding is my art of movement since 2007, driving me to overcome obstacles with persistence and enjoy the camaraderie among peers. Favorite trick: Fakie Frontside 360 Heelflip.",
    images: [skate, skate1, skate4, skate3, skate2],
  },
  {
    image: photo,
    title: "Photo lover",
    description:
      "Photography for me is about capturing the essence of the moment, whether it's the smile of a stranger or the silhouette of a building. Each image tells a story.",
    images: [photo, photo1, photo0, photo2, photo3, photo4, photo5, photo6],
  },
  {
    image: moto,
    title: "Biker",
    description:
      "On my custom bike, each route is a new story. Whether it's a challenging ride in the rain or a calm cruise.",
    images: [moto],
  },
  {
    image: cine,
    title: "Cinephile",
    description:
      "A film buff with diverse tastes, I seek out movies that make an impact. I prefer the personal experience of watching films at home, though I never miss the big premieres in theaters.",
    images: [cine],
  },
  {
    image: reader,
    title: "Bookworm",
    description:
      "Reading is synonymous with personal balance for me, with 'Ikigai' currently on my nightstand and a love for fiction that sparks imagination. I always opt for the touch and smell of a physical book.",
    images: [reader],
  },
];
