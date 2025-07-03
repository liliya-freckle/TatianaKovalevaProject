import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./SubModal.module.scss";

const SubModal = ({ title, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <CloseButton onClick={onClose} />
        <h2>{title}</h2>
        <p>Описание задачи: {title}. Здесь будет детальная информация.</p>
      </div>
    </div>
  );
};

export default SubModal;
