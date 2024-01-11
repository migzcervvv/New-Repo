import React from "react";

import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <i className="bx bx-envelope"></i>
          <a href="mailto:migzcerv007@gmail.com">Send an Email!</a>
        </li>
        <li className={styles.link}>
          <i className="bx bxl-linkedin-square"></i>
          <a href="https://www.linkedin.com/in/migzcerv7/">
            Connect on LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <i className="bx bxl-github"></i>
          <a href="https://github.com/migzcervvv">Explore My GitHub</a>
        </li>
      </ul>
    </footer>
  );
};
