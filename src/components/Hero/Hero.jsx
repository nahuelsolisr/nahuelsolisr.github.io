import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, Soy Rodrigo</h1>
        <p className={styles.description}>
          Desarrollador Front/Back End 😄   
         
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contactame!
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="una imagen de mi"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
