// Import the styles from the SCSS module
import classes from "./Footer.module.scss";

// Define a Footer component
export const Footer = () => {
  return (
    // Root div element for Footer component with 'footer' style class applied
    <div className={classes.footer}>
      {/* Wrapping div for footer content with 'footerWrapper' style class
      applied */}
      <div className={classes.footerWrapper}>
        {/* Display a creation statement with a heart emoji */}
        Created with ❤️ by
        {/* Name of the creator in a span element to allow special styling */}
        <span class={classes.footerHover}>Joan rosario</span>
        {/* Display creation year, copyright notice and an open proposition for job/freelance opportunities */}
        in 2023. Copyright &copy; by Joan rosario. Always open to job/freelance
        propositions.
      </div>
    </div>
  );
};
