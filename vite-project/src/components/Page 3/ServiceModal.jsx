import React, { useState } from "react";
import styles from "./ServiceModal.module.scss";
import SubModal from "./SubModal";

const scrollToContacts = () => {
  document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
};

const ServiceModal = ({ type, onClose }) => {
  const [subModal, setSubModal] = useState(null);
  const isSingle = type === "single";

  const tasks = [
    "Базовая настройка аккаунта на GetCourse",
    "Подготовка и проведение вебинара",
    "Продажи",
    "Работа с пользователями",
    "Тренинги и уроки",
    "Подключение",
    "Дополнительные услуги",
  ];

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
          {isSingle ? (
            <>
              <h2>Разовые задачи</h2>
              <ul className={styles.list}>
                {tasks.map((task, i) => (
                  <li key={i}>
                    <button onClick={() => setSubModal(task)}>{task}</button>
                  </li>
                ))}
              </ul>
              <button className={styles.actionBtn} onClick={scrollToContacts}>
                Рассчитать стоимость
              </button>
            </>
          ) : (
            <>
              <h2>Автоматизация</h2>
              <p>
                Подключение автоматических процессов для онлайн-обучения и
                продаж.
              </p>
              <button className={styles.actionBtn} onClick={scrollToContacts}>
                Связаться
              </button>
            </>
          )}
        </div>
      </div>
      {subModal && (
        <SubModal title={subModal} onClose={() => setSubModal(null)} />
      )}
    </>
  );
};

export default ServiceModal;
