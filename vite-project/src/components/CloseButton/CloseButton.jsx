import React from "react";
import styles from "./CloseButton.module.scss";

const CloseButton = ({ onClick }) => {
  return (
    <button
      className={styles.closeBtn}
      onClick={onClick}
      aria-label="Закрыть окно">
      <span className={styles.circle}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path
            d="M18 6 L6 18 M6 6 L18 18"
            stroke="#231D17"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default CloseButton;
