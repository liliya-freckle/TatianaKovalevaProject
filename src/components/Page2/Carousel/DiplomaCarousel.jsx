import styles from './DiplomaCarousel.module.scss'
import './DiplomaCarousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'




const DiplomaCarousel = ({ images }) => {


  return (
    <div className={styles.carousel}>
      <button
        id='prev'
        className={styles.custom_prev}>
        <img
          src='src/assets/images/arrow.png'
          alt='←'
        />
      </button>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            nextEl: '#next',
            prevEl: '#prev',
          }}
          pagination={{ clickable: true }}
					>
          {images.map((img, index) => (
            <>
            const src = img.startsWith('/')
            ? img 
            : `/assets/diplomas/${img}`

            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className={styles.carousel_img}
              />
            </SwiperSlide>
            </>
          )
  )}
        </Swiper>
      </div>
      <button
        id='next'
        className={styles.custom_next}>
        <img
          src='src/assets/images/arrow.png'
          alt='→'
        />
      </button>
    </div>
  )
}

export default DiplomaCarousel
