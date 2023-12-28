import {
  Public,
  DatasetLinked,
  PieChartOutline,
  Code,
  FilterDrama,
  Terminal,
  AutoFixHigh,
  School,
  Campaign,
  VideoCameraFrontOutlined,
  SatelliteAltOutlined,
  Storage,
  Api
} from "@mui/icons-material";

// skate

export const experience = [
  {
    icon: "notifications",
    title: "Geospatial data engineer",
    dateTime: "Oct, 2019 - current",
    description:
      "At Development Seed, I developed tools for data creation and validation in machine learning projects, and engineered ETL processes from various sources such as web scraping, vector and raster GIS data, databases, APIs, and tabular data, with a focus on improving efficiency and data integrity.",
    detail: "",
  },
  {
    icon: "data_object",
    title: "Cadastre assistant",
    dateTime: "Feb, 2019 - Oct, 2019",
    description:
      "I spearheaded the development of a spatial cadastral application at SEDA Ayacucho, where I registered and stored both spatial and tabular information of the city's basic services. Fulfilling the role of a Full Stack Developer, I not only generated but also deployed the application, integrating comprehensive data solutions for Ayacucho's urban infrastructure.",
    detail: "",
  },
  {
    icon: "data_object",
    title: "Full stack developer",
    dateTime: "Oct, 2018 - current",
    description:
      "As a Full Stack Developer, I design and develop applications for institutions in my environment, contributing solutions in areas such as cadastral systems, education, and finance. My focus is on creating solutions that align with their objectives and support their processes, ensuring that each application is tailored to meet the specific needs and goals of these institutions.",
    detail: "",
  },
  {
    icon: "school",
    title: "Systems Engineer",
    dateTime: "Jan, 2018 - Aug, 2018 ",
    description: "Universidad Nacional de San Cristóbal de Huamanga.",
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
    name: "Geospatial process (raster and vector data)",
    key: "Geospatial",
    icon: <Public  fontSize="medium"  color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Extract, transform and load (ETL)",
    key: "etl",
    icon: <DatasetLinked  fontSize="medium"  color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Data visualization",
    key: "data-visualization",
    icon: <PieChartOutline  fontSize="medium"  color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Backend and API Developer",
    key: "backend-developer",
    icon: <Api  fontSize="medium"  color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Cloud services",
    key: "cloud-services",
    icon: <FilterDrama  fontSize="medium"  color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Bash and Docker Fan",
    key: "bash-fan",
    icon: <Terminal  fontSize="medium"  color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Programming and Scripting",
    key: "script-fan",
    icon: <Code  fontSize="medium"  color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Database Development and Management",
    key: "database-fan",
    icon: <Storage  fontSize="medium"  color="inherit" />,
    noCollapse: true,
  },
  
];

export const contribution = [
  {
    type: "collapse",
    name: "Magic Wand Plugin for Java OpenStreetMap Editor (JOSM),  it allows users to label areas using a spectrum of colors",
    key: "magic-wand-josm",
    icon: <AutoFixHigh fontSize="medium" color="inherit" />,
    links: [
      "https://github.com/developmentseed/JosmMagicWand",
      "https://josm.openstreetmap.de/wiki/Plugins",
    ],
  },
  {
    type: "collapse",
    name: "Mobile Signal Coverage in Educational Institutions in Peru, focuses on showing the coverage points for educational institutions and the coverage area by antennas.",
    key: "peru-school-app",
    icon: <School  fontSize="medium"  color="inherit" />,
    noCollapse: true,
    links: [
      "https://developmentseed.org/peru-mobile-signal-schools/",
      "https://github.com/developmentseed/peru-mobile-signal-schools",
      "https://www.linkedin.com/posts/juniorflores_coberturamaejvil-educaciaejn-ayacucho-activity-7103837157366063104-QwW-?utm_source=share&utm_medium=member_desktop",
    ],
  },
  {
    type: "collapse",
    name: "Speaker at the State of the Map Brasil 2023 (SOTM - BR), where I talked about my contribution and the integration of the meta model segment anything(SAM) to the JOSM plugin.",
    key: "data-visualization",
    icon: <Campaign fontSize="medium" color="inherit" />,
    noCollapse: true,
    links: [
      "https://sotm-br.github.io/2023",
      "https://twitter.com/developmentseed/status/1707874763585237218",
    ],
  },
  {
    type: "collapse",
    name: "Landsat2geojson Package is written in Python and uses the EarthExplorer and Overpass portal interface to search, download, and process scenes from Landsat Collections via the command line.",
    key: "landsat2geojson",
    icon: <SatelliteAltOutlined  fontSize="medium"  color="inherit" />,
    noCollapse: true,
    links: ["https://github.com/yunica/landsat2geojson"],
  },
  {
    type: "collapse",
    name: "Speaker at Mapping USA 2022, where I talked about my creation of the Josm Magic Wand, focused on the use of image processing",
    key: "mapping-usa-",
    icon: <VideoCameraFrontOutlined
     fontSize="medium"  color="inherit" />,
    noCollapse: true,
    links: [
      "https://openstreetmap.us/events/mapping-usa/2022/",
      "https://twitter.com/OpenStreetMapUS/status/1610658065388376066",
    ],
  },
];
