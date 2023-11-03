// Custom components
// @mui icons
import Icon from "@mui/material/Icon";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Images
const routes = [
  {
    type: "collapse",
    name: "Junior flores",
    key: "Junior-flores",
    route: "/",
    icon: <Icon fontSize="medium">rocket</Icon>,
    noCollapse: true,
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "About",
    key: "about",
    route: "/about",
    icon: <Icon fontSize="medium">person</Icon>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Services",
    key: "services",
    route: "/services",
    icon: <Icon fontSize="medium">business_center</Icon>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Projects",
    key: "projects",
    route: "/projects",
    icon: <Icon fontSize="medium">developer_mode</Icon>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Contact",
    key: "contact",
    route: "/contact",
    icon: <Icon fontSize="medium">mail</Icon>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "hobbies",
    key: "hobbies",
    route: "/hobbies",
    icon: <Icon fontSize="medium">skateboarding</Icon>,
    noCollapse: true,
  },
  { type: "title", title: "Social", key: "title-social" },
  {
    type: "collapse",
    name: "@yunica",
    key: "github",
    href: "https://github.com/yunica",
    icon: <GitHubIcon color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "@juniorflores",
    key: "linkeding",
    href: "https://www.linkedin.com/in/juniorflores/",
    icon: <LinkedInIcon color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "@yunica__",
    key: "twitter",
    href: "https://twitter.com/yunica__",
    icon: <TwitterIcon color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "@junior__floresm",
    key: "instagram",
    href: "https://www.instagram.com/junior__floresm/",
    icon: <InstagramIcon color="inherit" />,
    noCollapse: true,
  },
  { type: "divider", key: "divider-3" },
];

export default routes;
