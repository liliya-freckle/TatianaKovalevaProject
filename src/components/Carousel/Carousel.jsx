import React, { useState } from 'react';
import styles from './Carousel.module.scss'
import './Carousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Carousel = ({ images , captions }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.carousel}>
      <p
        id='prev'
        className={styles.custom_prev}>
        <img
          src='/images/arrow.png'
          alt='←'
        />
      </p>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          centeredSlides={true}
           breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          navigation={{
            nextEl: '#next',
            prevEl: '#prev',
          }}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <a
                href={src}
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className={styles.carousel_img}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        {captions && captions.length > 0 && (
          <div className={styles.caption}>
            {captions[activeIndex]}
          </div>
        )}
      </div>
      <p
        id='next'
        className={styles.custom_next}>
        <img
          src='/images/arrow.png'
          alt='→'
        />
      </p>
    </div>
  )
}

export default Carousel