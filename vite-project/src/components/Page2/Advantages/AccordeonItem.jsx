import React, { useState } from "react";
import imageDown from "/icons/down-arrow.svg";
import imageUp from "/icons/up-arrow.svg";
import styles from "./advantages.module.scss";

export default function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
       setIsOpen((prevValue) => !prevValue);
  };

return (
    <div className={styles.accordionItem}>
              <div
        className={`${styles.accordionTitle} ${isOpen ? styles.active : ""}`}
        onClick={handleIsOpen}
      >
        {title}
        <img
          src={isOpen ? imageUp : imageDown}
          width="15px"
          className={styles.img}
          alt="arrow"
        />
      </div>

      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
}