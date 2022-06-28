import React from "react";

import styles from "./Button.module.css";

const HouseCharacterButton = (props) => {
  return (
    <button
      className={`btn ${styles.modal_button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default HouseCharacterButton;
