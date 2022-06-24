import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/characters"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/staff"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Staff
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/house"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Houses
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
