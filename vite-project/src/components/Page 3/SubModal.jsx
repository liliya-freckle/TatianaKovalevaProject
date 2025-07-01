import React from "react";
import styles from "./SubModal.module.scss";

const SubModal = ({ title, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ← Назад
        </button>
        <h2>{title}</h2>
        <p>Описание задачи: {title}. Здесь будет детальная информация.</p>
      </div>
    </div>
  );
};

export default SubModal;
