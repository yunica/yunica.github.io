import Icon from "@mui/material/Icon";
import { Public, DatasetLinked , PieChartOutline, Code, FilterDrama, Terminal} from "@mui/icons-material";


export const experience = [
  {
    icon: "notifications",
    title: "Geospatial data engineer",
    dateTime: "Oct, 2019 - current",
    description: "Development Seed.",
    detail:""
  },
  {
    icon: "data_object",
    title: "Cadastre assistant",
    dateTime: "Feb, 2019 - Oct, 2019",
    description: "SEDA Ayacucho",
    detail:""
  },
  {
    icon: "data_object",
    title: "Full stack developer",
    dateTime: "Oct, 2018 - current",
    description: "freelance",
    detail:""
  },
  {
    icon: "data_object",
    title: "Full stack developer",
    dateTime: "Aug, 2018 - Dec, 2018",
    description: "full stack developer at GacetaLaboral",
    detail:""
  },
  {
    icon: "school",
    title: "Systems Engineer",
    dateTime: "Jan, 2018 - Aug, 2018 ",
    description: "Universidad Nacional de San Cristóbal de Huamanga",
    detail:""
  },
  
];

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  canvasProps: {
    style: {
      maxWidth: "300px",
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
]