import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>No te olvides de contactarme 🙌</h2> 
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="rodrigonahuelsolis@hotmail.com">rodrigonahuelsolis@hotmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rodrigo-solis-142815257/">Rodrigo Solis</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a alt="_BLANK" href="https://github.com/nahuelsolisr">nahuelsolisr</a>
        </li>
      </ul>
    </footer>
  );
};
