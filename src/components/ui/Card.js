// Import the required hooks from React
import { useEffect, useRef } from "react";
// Import the styles from the SCSS module
import classes from "./Card.module.scss";

// Define a Card component that takes in children, position and customClass as props
export const Card = ({ children, position, customClass }) => {
  // Use useRef to create a ref that can be attached to a DOM element
  const cardRef = useRef(null);

  // Use useEffect to perform side effects after the component renders
  useEffect(() => {
    // Define a function to handle scroll events
    const handleScroll = () => {
      // Get the height of the window
      const windowHeight = window.innerHeight;
      // Get the position of the card in the viewport
      const rect = cardRef.current.getBoundingClientRect();
      // Calculate the offset of the card from the top of the window
      const offset = rect.top - windowHeight + rect.height;

      // If the card has entered the viewport
      if (offset <= 0) {
        // Add the 'animate' class to the card
        cardRef.current.classList.add(classes.animate);
        // Remove the scroll listener as it's no longer needed
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add a scroll listener to the window to listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the effect by removing the scroll listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // Pass an empty array to useEffect to ensure the effect only runs once after the initial render
  }, []);

  // Render the card with the appropriate classes and any children it was given
  return (
    // Attach the ref to the div, assign the classes, and render any children
    <div
      ref={cardRef}
      className={`${classes.card} ${classes[position]} ${customClass}`}
    >
      {children}
    </div>
  );
};
