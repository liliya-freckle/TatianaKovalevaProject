import React from 'react';
import styles from './contacts.module.scss';
import iconWA from "/icons/icon-WA.png"
import iconTG from "/icons/icon-TG.png"
import iconVK from "/icons/icon-VK.png"

const Contacts = () => {
  return (
    <section id="contacts" className={styles.contactsSection}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.contactsContainer}>
          <p>Вы можете связаться со мной любым удобным для Вас способом</p>
          <p>+7 913 157 89-33</p>
          <p>kovaleva070215@gmail.com</p>
        <div className={styles.iconsContainer}>
          <a href="https://wa.me/79131578933" target="_blank" rel="noopener noreferrer">
                <img src={iconWA} alt="WhatsApp" className={styles.icon} />
            </a>
            <a href="https://t.me/miss_Kovaleva_Tatiana" target="_blank" rel="noopener noreferrer">
                <img src={iconTG} alt="Telegram" className={styles.icon} />
            </a>
            
            <a href="https://vk.com/miss_kovaleva_tatiana" target="_blank" rel="noopener noreferrer">
                <img src={iconVK} alt="VK" />
            </a>
        </div>
        </div>
        
    </section>

  )
}

export default Contacts