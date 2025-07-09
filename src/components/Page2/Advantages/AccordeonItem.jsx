import React, { useState } from "react";
// import imageDown from "";
// import imageUp from "";
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
          src={isOpen ? '${import.meta.env.BASE_URL}/icons/up-arrow.svg' : '${import.meta.env.BASE_URL}/icons/down-arrow.svg'}
          className={styles.img}
          alt="стрелочка вниз"
        />
      </div>

      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
}