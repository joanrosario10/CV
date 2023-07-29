import { Card } from "./ui/Card";

import classes from "./About.module.scss";

export const About = () => {
  return (
    <Card position="right" customClass={classes.about} id="about">
      <p className={classes.description}>
        Hi there! I'm self-taught web-developer based in India, although I
        consider myself as a world's citizen. I'm deeply passionate about web
        development and I'm eager to share this passion with you! <br />
        When I don't code, I read books, play with my dog or learn languages.
        <br />I can communicate with you in Tamil, English, Hindi, korean (under
        process).
      </p>
    </Card>
  );
};
