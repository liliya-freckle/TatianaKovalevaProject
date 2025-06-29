import React, { useState } from "react";
import styles from "./Services.module.scss";
import ServiceModal from "./ServiceModal";
import Button from "../Button/Button";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="services" className={styles.servicesSection}>
      <h2 className={styles.title}>Услуги</h2>
      <div className={styles.serviceBlocks}>
        <div className={styles.serviceCard}>
          <h3>Разовые задачи</h3>
          <p>Для тех, кому нужно решить несколько конкретных задач</p>
          <Button onClick={() => setActiveModal("single")}>Подробнее</Button>
        </div>
        <div className={styles.serviceCard}>
          <h3>Автоматизация</h3>
          <p>Автоматизация любых процессов в проектах под запрос заказчика</p>
          <Button onClick={() => setActiveModal("auto")}>Подробнее</Button>
        </div>
      </div>
      {activeModal && (
        <ServiceModal type={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  );
};

export default Services;
