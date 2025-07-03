import React from 'react';
import styles from './about.module.scss';

export default function AboutItem({ number, description, subText }) {
  return (
    <div className={styles.statisticItem}>
      <div className={styles.statisticNumber}>{number}</div>
      <div className={styles.statisticDescription}>{description}</div>
      <div className={styles.statisticSubtext}>{subText}</div>
    </div>
  );
}

// import React from 'react';
// import style from './About.module.scss';

// export default function StatisticItem({ number, description, subText }) {
//   return (
//     <div className={styles.statisticItem}>
//       <div className={styles.statisticNumber}>{number}</div>
//       <div className={styles.statisticDescription}>{description}</div>
//       {subText && <div className={style.statisticSubtext}>{subText}</div>}
//     </div>
//   );
// }