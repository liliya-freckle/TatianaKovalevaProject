import React from 'react';
import styles from './about.module.scss';

export default function AboutItem({ number, description, subText, setIsOpen }) {
  return (
    <div className={styles.statisticItem}>
      <div className={styles.statisticNumber}>{number}</div>
      <div className={styles.statisticDescription}>{description}</div>
      {subText && (
        <div 
          className={styles.statisticSubtext} 
          onClick={() => setIsOpen && setIsOpen(true)}
        >
          {subText}
        </div>
      )}
    </div>
  );
}
