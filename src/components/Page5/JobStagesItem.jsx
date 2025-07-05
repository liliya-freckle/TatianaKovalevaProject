import React from 'react';
import styles from './jobstages.module.scss';

export default function JobStagesItem({ number, description }) {
  return (
    <div className={styles.stageItem}>
      <div className={styles.stageNumber}>{number}</div>
      <div className={styles.stageDescription}>{description}</div>
    </div>
  );
}

