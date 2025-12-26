import React from 'react'
import styles from './modal.module.scss';

export default function Modal( {setIsOpen, children} ) {

  const closeModal = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      setIsOpen(false);
    }
  }; 

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={closeModal}>
        {children}
      </div>
    </div>
  )
}

