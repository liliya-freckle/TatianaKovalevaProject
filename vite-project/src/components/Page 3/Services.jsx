import React, { useState } from "react";
import styles from "./Services.module.scss";
//import ServiceModal from "./ServiceModal";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.title}>Услуги</h2>
      <div className={styles.serviceBlocks}>
        <div className={styles.serviceCard}>
          <h3>Разовые задачи</h3>
          <button onClick={() => setActiveModal("single")}>Подробнее</button>
        </div>
        <div className={styles.serviceCard}>
          <h3>Автоматизация</h3>
          <button onClick={() => setActiveModal("auto")}>Подробнее</button>
        </div>
      </div>
      {activeModal && (
        <ServiceModal type={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  );
};

export default Services;
