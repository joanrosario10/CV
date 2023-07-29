import classes from "./ProjectItem.module.scss";
import { Card } from "./ui/Card";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";

export const ProjectItem = (props) => {
  return (
    <Card position={props.position} customClass={classes.project}>
      <div className={classes.overlay}></div>
      <>
        <div className={classes.titleAndIcons}>
          <div className={classes.iconsWrapper}>
            <h2>{props.title}</h2>
            <div className={classes.icons}>
              <a href={props.demoUrl} target="_blank">
                <HiOutlineDesktopComputer className={classes.icon} />
              </a>
              <a href={props.codeUrl} target="_blank">
                <BiCodeAlt className={classes.icon} />
              </a>
            </div>
          </div>
        </div>
        <small className={classes.description}>
          Stack: {props.description}
        </small>
        <img className={classes.image} src={props.imgUrl} alt={props.title} />
      </>
    </Card>
  );
};
