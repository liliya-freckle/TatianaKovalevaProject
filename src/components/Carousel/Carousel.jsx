import styles from './Carousel.module.scss'
import './Carousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Carousel = ({ images }) => {
  return (
    <div className={styles.carousel}>
      <p
        id='prev'
        className={styles.custom_prev}>
        <img
          src='src/assets/images/arrow.png'
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
          pagination={{ clickable: true }}>
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
      </div>
      <p
        id='next'
        className={styles.custom_next}>
        <img
          src='src/assets/images/arrow.png'
          alt='→'
        />
      </p>
    </div>
  )
}

export default Carousel
