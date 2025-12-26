import React from 'react';
import styles from './jobstages.module.scss';

export default function JobStagesItem({ number, word, description }) {
  return (
    <div className={styles.stageItem}>
      <div className={styles.stageNumberWrapper}>
        <span className={styles.stageNumber}>{number}</span>
        <span className={styles.stageWord}>{word}</span>
      </div>
      <div className={styles.stageDescription}>{description}</div>
    </div>
  );
}


