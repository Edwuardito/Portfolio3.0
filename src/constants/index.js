import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/paris.png";
import project3 from "../assets/projects/starwars.png";

export const HERO_CONTENT = `¡Hola! Soy Edwin Rodríguez García, Desarrollador Front End especializado en React y Taildwind.
`;
export const HERO_CONTENT_EN = `Hello! I am Edwin Rodríguez García, Front End Developer specialized in React and Taildwind.
`;

export const ABOUT_TEXT = ` 
Llevo más de un año programando como frontend, durante ese periodo utilicé React, TypeScript, Node, Figma, Bootstrap y Chart.js.
Tengo bases sólidas en Bases de Datos como PostgresSQL. Actualmento trabajo como vendedor, Estudio Ingles y programo en los tiempos Libres.
Mis pasatiempos favoritos son: El Gimnasio, cocinar y ver series`;
export const ABOUT_TEXT_EN = ` 
I have been programming as a frontend for more than a year, during that period I used React, TypeScript, Node, Figma, Bootstrap and Chart.js.
I have solid foundations in Databases such as PostgresSQL. I currently work as a salesperson, study English and program in my free time.
My favorite hobbies are: The gym, cooking and watching series`;

export const EXPERIENCES = [
  {
    year: "2023 - octubre",
    role: "Front End Developer para un MVP",
    company: "Andromeda",
    description: `Realice diseños de paneles gráficos en Figma para Andrómeda, Basándome en diseño minimalista, tuve en cuenta la Experiencia de Usuario y el diseño para dispositivos móviles.`,
    description_en: `I made graphic panel designs in Figma for Andromeda. Based on minimalist design, I took into account the User Experience and the design for mobile devices.`,
    technologies: ["Javascript", "React.js", "Taildwind", "chart.js"],
  }
];

export const PROJECTS = [
  {
    title: "BrainWave Website",
    link: "https://frontpagebyedu.netlify.app",
    image: project1,
    description:"Una pagina para una IA que resuelve todas tus dudas, en este prototipo de landing demuestro de lo que soy capaz como frontend developer",
    description_en:"A page for an AI that solves all your doubts, in this landing prototype I demonstrate what I am capable of as a frontend developer",
    technologies: ["HTML", "CSS", "React", "Node.js", "Taildwind"],
  },
  {
    title: "Paris Shop Website",
    link: "https://tiendaparis.netlify.app",
    image: project2,
    description:"Una pagina hecha para el catalogo de una tienda de ropa, que cuenta con dashboard donde actualizar productos, precios y categorias",
    description_en:"A page made for the catalog of a clothing store, which has a dashboard where you can update products, prices and categories",
    technologies: ["HTML", "CSS", "React", "Node.js", "Taildwind","Vite"],
  },
  {
    title: "Star Wars Challenge",
    link: "https://starwarchallengebyedu.netlify.app",
    image: project3,
    description:"Es una app sobre las peliculas y personajes de la famosa saga de star wars",
    description_en:"It is an app about the movies and characters of the famous Star Wars saga.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Taildwind","Vite"],
  }
];

export const CONTACT = {
  address: "Santa Cruz, Caleta Olivia 9011 ",
  phoneNo: "+54 2974265169 ",
  email: "a20edwin02@gmail.com",
};
