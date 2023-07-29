import { useState } from "react";
import { Card } from "./ui/Card";
import classes from "./Contact.module.scss";
import { BiEnvelope } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
  const [isCopying, setIsCopying] = useState(false);
  const hiddenClass = isCopying ? "" : classes.hidden;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("joan.sario10@gmail.com");

    setIsCopying(true);
    setTimeout(() => {
      setIsCopying(false);
    }, 2000);
  };
  const handleCopyGithub = () => {
    navigator.clipboard.writeText("https://github.com/joanrosario10");

    setIsCopying(true);
    setTimeout(() => {
      setIsCopying(false);
    }, 2000);
  };

  return (
    <Card>
      <h2 className={classes.title}>Hit me up</h2>
      <small className={classes.toCopy}>Click the text to copy info</small>
      <div className={classes.contactDetails}>
        <div className={`${classes.contact}`}>
          <BiEnvelope onClick={handleCopyEmail} className={classes.icon} />
          <p onClick={handleCopyEmail} className={classes.hoverLink}>
            joan.sario10@gmail.com
          </p>
        </div>
        <div className={`${classes.contact}`}>
          <a href="https://github.com/joanrosario10" target="_blank">
            <FaGithub className={classes.icon} />
          </a>
          <p onClick={handleCopyGithub} className={classes.hoverLink}>
            joanrosario10
          </p>
        </div>
      </div>

      <small className={hiddenClass}>Copied to your clipboard!</small>
    </Card>
  );
};
