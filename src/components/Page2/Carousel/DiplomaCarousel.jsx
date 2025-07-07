import styles from './DiplomaCarousel.module.scss'
import './DiplomaCarousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import DiplomaImages from './DiplomaImages'




const DiplomaCarousel = () => {
const src = DiplomaImages.startsWith('/')
            ? DiplomaImages 
            : `/diploma/${DiplomaImages}`


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
          {DiplomaImages.map((img, index) => (
            <>
            
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
