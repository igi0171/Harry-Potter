import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";
import HouseCharacterButton from "./HouseCharacterButton";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.returnClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.houseCharacterData.name}</h2>
        </header>
        <div className={styles.content}>
          <p>
            {props.houseCharacterData.gender === "male" ? "♂" : "♀"}{" "}
            {props.houseCharacterData.ancestry}{" "}
            {props.houseCharacterData.species}
            {props.houseCharacterData.wizard ? " wizard" : ""}
          </p>
          <p>House: {props.houseCharacterData.house}</p>
          <p>Date of Birth: {props.houseCharacterData.dateOfBirth}</p>
          <p>Eye colour: {props.houseCharacterData.eyeColour}</p>
          <p>
            Wand: {props.houseCharacterData.wand.wood} wood;{" "}
            {props.houseCharacterData.wand.core} core;{" "}
            {props.houseCharacterData.wand.length}"
          </p>
          <p>Patronus: {props.houseCharacterData.patronus}</p>
        </div>
        <footer className={styles.actions}>
          <HouseCharacterButton onclick={props.returnClicked}>
            Return
          </HouseCharacterButton>
        </footer>
      </div>
    </div>
  );
};

const HouseCharacterModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          houseCharacterData={props.houseCharacterData}
          returnClicked={props.returnClicked}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default HouseCharacterModal;
