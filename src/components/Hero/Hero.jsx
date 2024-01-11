import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  useEffect(() => {
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(2);
      const y = pointerY.toFixed(2);
      const xp = (pointerX / window.innerWidth).toFixed(2);
      const yp = (pointerY / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty("--x", x);
      document.documentElement.style.setProperty("--xp", xp);
      document.documentElement.style.setProperty("--y", y);
      document.documentElement.style.setProperty("--yp", yp);
    };

    document.body.addEventListener("pointermove", syncPointer);

    return () => {
      document.body.removeEventListener("pointermove", syncPointer);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Miggz Cervantes</h1>
        <h3 className={styles.description}>
          I'm an aspiring Frontend Developer from Pamantasan ng Lungsod ng
          Maynila.
        </h3>
        <div className={styles.buttonContainer}>
          <button className={styles.btnbox}>
            <span>
              <a href="mailto:migzcerv007@gmail.com">Let's Talk!</a>
            </span>
          </button>
          <button className={styles.btnbox}>
            <span>
              <a href="https://docs.google.com/document/d/128RXikUSq2CFDmllmJ__5MU781b5EKPy7SU4ovcfZK8/edit?usp=sharing">
                Check my Resume!
              </a>
            </span>
          </button>
        </div>
      </div>
      <img
        src={getImageUrl("pics/Miggz.jpg")}
        alt="Miggz Picture"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
