import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import "boxicons";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h1>
              <i className="bx bx-desktop"></i>
            </h1>

            <h2>Frontend Development</h2>
            <p>
              I am a prospective Frontend Developer possessing comprehensive
              expertise in UI and UX design principles. My proficiency extends
              to encompassing fundamental concepts of various frameworks.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h1>
              <i className="bx bxs-server"></i>
            </h1>
            <h2>Backend Development</h2>
            <p>
              I possess foundational proficiency in Backend Development,
              specializing in CRUD operations. Additionally, I am well-versed in
              the implementation of Firebase, Flask applications, and machine
              learning concepts.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h1>
              <i className="bx bx-code-block"></i>
            </h1>
            <h2>Full-Stack Development</h2>
            <p>
              I aspire to fulfill my dream role as a full-stack developer. To
              achieve this goal, I am dedicating my initial focus to frontend
              development, ensuring a solid foundation before delving into
              backend development.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
