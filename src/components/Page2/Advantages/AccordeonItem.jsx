import React, { useState } from "react";
import imageDown from "${import.meta.env.BASE_URL}/icons/down-arrow.svg";
import imageUp from "${import.meta.env.BASE_URL}/icons/up-arrow.svg";
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
          className={styles.img}
          alt="стрелочка вниз"
        />
      </div>

      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
}