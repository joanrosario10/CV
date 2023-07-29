import b from "../assets/b.png";
import S from "../assets/S.png";
import menu from "../assets/menu.png";
import e from "../assets/e.png";

export const ProjectsDB = [
  {
    id: Math.random(),
    title: "Food order app",
    alt: "Food order app",
    imgUrl: menu,
    description: "React.js",
    demoUrl: "https://food-order-app128.netlify.app/",
    codeUrl: "https://github.com/joanrosario10/menu-price-calculater",
    position: "right"
  },
  {
    id: Math.random(),
    title: "Simon ",
    alt: "Simon",
    imgUrl: S,
    description: "JavaScript,HTML,CSS",
    demoUrl: "https://simon-game12300.netlify.app/",
    codeUrl: "https://github.com/joanrosario10/simon-game-#readme",
    position: "left"
  },

  {
    id: Math.random(),
    title: "Weather App",
    alt: "Weather App",
    imgUrl: e,
    description: "Node.js , Express , Javascript",
    demoUrl: "https://netwb-ffig-ghhh.onrender.com",
    codeUrl: "https://github.com/joanrosario10/weather-project",
    position: "right"
  },
  {
    id: Math.random(),
    title: "BEEkeper",
    alt: "BEEkeper",
    imgUrl: b,
    description: "React.js, React Context (with useReducer)",
    demoUrl: "https://2f13p8.csb.app/",
    codeUrl: "https://github.com/joanrosario10/beekeeper",
    position: "left"
  }
];
