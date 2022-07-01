import React from "react";
import ReactDOM from "react-dom";

import styles from "../Modal.module.css";
import StaffButton from "./StaffButton";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.returnClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.staffData.name}</h2>
        </header>
        <div className={styles.content}>
          <p>
            {props.staffData.gender === "male" ? "♂" : "♀"}{" "}
            {props.staffData.ancestry} {props.staffData.species}
            {props.staffData.wizard ? " wizard" : ""}
          </p>
          <p>House: {props.staffData.house}</p>
          <p>Date of Birth: {props.staffData.dateOfBirth}</p>
          <p>Eye colour: {props.staffData.eyeColour}</p>
          <p>
            Wand: {props.staffData.wand.wood} wood; {props.staffData.wand.core}{" "}
            core; {props.staffData.wand.length}"
          </p>
          <p>Patronus: {props.staffData.patronus}</p>
        </div>
        <img
          src={props.staffData.image}
          alt={props.staffData.name}
          className={styles.image}
        ></img>
        <footer className={styles.actions}>
          <StaffButton onclick={props.returnClicked}>Return</StaffButton>
        </footer>
      </div>
    </div>
  );
};

const StaffModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          staffData={props.staffData}
          returnClicked={props.returnClicked}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default StaffModal;
