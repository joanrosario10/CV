import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <span>Joan Rosario.</span>
        <span>
          let's create something cool
          <span className={classes.together}>together</span>
        </span>
      </div>
    </header>
  );
};
