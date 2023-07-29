// Import styles from the SCSS module
import classes from "./MainSection.module.scss";

// Define a MainSection component that takes in children as props
export const MainSection = ({ children }) => {
  // Render a div with a 'section' style class and place any child components inside it
  return <div className={classes.section}>{children}</div>;
};
