import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import SubModal from "./SubModal";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./ServiceModal.module.scss";

const scrollToContacts = () => {
  document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
};

const ServiceModal = ({ type, onClose }) => {
  const [subModal, setSubModal] = useState(null);
  const isSingle = type === "single";
  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
      <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={styles.modal} ref={modalRef}>
          <CloseButton onClick={onClose} />
          {isSingle ? (
            <>
              <p>
                Для тех, кому нужно решить несколько конкретных задач таких как:
              </p>
              <ul className={styles.list}>
                {tasks.map((task, i) => (
                  <li key={i}>
                    <button onClick={() => setSubModal(task)}>{task}</button>
                  </li>
                ))}
              </ul>
              <p className={styles.price}>
                Стоимость рассчитывается индивидуально
              </p>
              <Button onClick={scrollToContacts}>Рассчитать стоимость</Button>
            </>
          ) : (
            <>
              <p className={styles.auto}>
                Автоматизация любых процессов в проектах под запрос заказчика
                <br />
                для упрощения и ускорения работы сотрудников.
              </p>
              <p className={styles.auto}>
                – создание авторассылок и автозвонков;
                <br />
                – создание чат-ботов;
                <br />
                – автоматическая постановка задач менеджерам;
                <br />– процессы любой сложности.
              </p>

              <p className={styles.price}>
                Стоимость рассчитывается индивидуально
              </p>
              <Button onClick={scrollToContacts}>Связаться</Button>
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
