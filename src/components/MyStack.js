import classes from "./MyStack.module.scss";
import { Card } from "./ui/Card";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiGit,
  SiGithub,
  SiMongodb
} from "react-icons/si";

import { FaSass, FaNodeJs } from "react-icons/fa";

export const MyStack = () => {
  return (
    <Card position="left" customClass={classes.stack}>
      <div className={classes.using}>
        <h2>Currently using:</h2>
        <div className={classes.gallery}>
          <div className={classes.row}>
            <SiHtml5 className={`${classes.icon} ${classes.html}`} />
            <SiCss3 className={`${classes.icon} ${classes.css}`} />
            <SiReact className={`${classes.icon} ${classes.react}`} />
          </div>
          <div className={classes.row}>
            <SiJavascript className={`${classes.icon} ${classes.js}`} />
            <SiGit className={`${classes.icon} ${classes.git}`} />
            <SiGithub className={`${classes.icon} ${classes.github}`} />
          </div>
          <div className={classes.row}>
            <FaSass className={`${classes.icon} ${classes.sass}`} />
            <SiMongodb className={`${classes.icon} ${classes.mongo}`} />
            <FaNodeJs className={`${classes.icon} ${classes.node}`} />
          </div>
        </div>
      </div>
    </Card>
  );
};
