import React from 'react';
import styles from "./advantages.module.scss";
import AccordionItem from "./AccordeonItem";
import { list } from "./list";

export default function Advantages() {
  return (
    <div>
        <h2 className={styles.title}>Преимущества работы со мной</h2>
        <div className={styles.container}>
          {list.map((item, index) => (
            <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
        </div>
        </div>
  )
}