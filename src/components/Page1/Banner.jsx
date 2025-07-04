import Button from '../Button/Button'
import NavigationBar from './NavigationBar'
import styles from './Banner.module.scss'
import { useState } from 'react'

const Banner = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  const handleOpen = () => setIsPopupVisible(true)
  const handleClose = () => setIsPopupVisible(false)

  const scrollToContacts = () => {
    const el = document.getElementById('contacts')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.banner}>
      <NavigationBar />
      <div className={styles.container}>
        <div className={styles.text_block}>
          <h1>
            Татьяна
            <br /> Ковалева
            <img
              className={styles.small_img}
              src='src/assets/images/i.png'
              alt='i'
              onClick={handleOpen}
            />
          </h1>
          {isPopupVisible && (
            <div className={styles.hidden_text}>
              <img
                className={styles.close_img}
                src='src/assets/images/close.png'
                alt='close'
                onClick={handleClose}
              />
              <p>
                Сертифицированный технический специалист одной из крупных
                платформ для обучения - GetCourse. Занимаюсь запусками и
                техническим сопровождением школ и онлайн-проектов. На практике
                умею оперативно решать множество стандартных и нестандартных
                задач, возникающих в работе онлайн-школ.
              </p>
            </div>
          )}
          <p>
            Сертифицированный
            <br /> технический специалист
            <br /> онлайн проектов
          </p>
          <Button onClick={scrollToContacts}>Связаться</Button>
        </div>
        <img
          className={styles.main_img}
          src='src/assets/images/main-img.png'
          alt='Татьяна Ковалева'
        />
      </div>
    </div>
  )
}

export default Banner
