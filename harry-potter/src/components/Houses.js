import React from "react";
import { Link } from "react-router-dom";

import styles from "./Houses.module.css";

const Houses = () => {
  return (
    <>
      <ul className={styles.houses}>
        <li>
          <Link to="/house/gryffindor">
            <img src="https://i.imgur.com/rEMB78b.png" alt="gryffindor-logo" />
          </Link>
        </li>
        <li>
          <Link to="/house/hufflepuff">
            <img src="https://i.imgur.com/xvYTsM0.png" alt="hufflepuff-logo" />
          </Link>
        </li>
        <li>
          <Link to="/house/ravenclaw">
            <img src="https://i.imgur.com/vRd0X2y.png" alt="ravenclaw-logo" />
          </Link>
        </li>
        <li>
          <Link to="/house/slytherin">
            <img src="https://i.imgur.com/aszxyZw.png" alt="slytherin-logo" />
          </Link>
        </li>
      </ul>
      <p className={styles.speech}>
        <i>
          "The four Houses are called Gryffindor, Hufflepuff, Ravenclaw, and
          Slytherin. Each House has its own noble history and each has produced
          outstanding witches and wizards. While you are at Hogwarts, your
          triumphs will earn your House points, while any rule breaking will
          lose House points. At the end of the year, the House with the most
          points is awarded the House Cup, a great honour. I hope each of you
          will be a credit to whichever House becomes yours."
        </i>
      </p>
      <p className={styles.minerva}>
        — Minerva McGonagall to first-year students on 1 September 1991, shortly
        before the Sorting Ceremony
      </p>
    </>
  );
};

export default Houses;
