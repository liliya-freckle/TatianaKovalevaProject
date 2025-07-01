
import React, { useState } from 'react';

const DiplomaCarusel = ({images}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide =() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };


  return (
    
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prevSlide}>‹</button>

      <div className={styles.imageWrapper}>
        <img src={images[currentIndex]} alt={`Diploma ${currentIndex + 1}`} className={styles.image} />
      </div>

      <button className={styles.arrow} onClick={nextSlide}>›</button>
    </div>
  );

}

export default DiplomaCarusel

