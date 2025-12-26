import React from 'react'
import styles from './modal.module.scss';
// import closeIcon from '/icons/close.png';
import CloseButton from '../../CloseButton/CloseButton';

export default function ModalContent( {setIsOpen}) {
  return (
    <div className={styles.modal_content}> 
    <CloseButton onClick={() => setIsOpen(false)} />
    
      <div className={styles.modal_contentText}>
        <p>Из основных:</p>
        <p>Онлайн-школа "SCHOOL CRYSTALLAND"</p>
        <p>Онлайн-школа Ляли Шанти</p>
        <p>Институт Красоты Анны Капитановой</p>
        <p>Клуб-наставничество "Год вперед"</p> 
        <p>Тренинговый центр Павла Ракова</p> 
        <p>Онлайн-школа "Неотложка"</p>
        <p>Академия фотомастерства Светы Малышевой</p>
        <p>Онлайн-проект Ольги Байкиной</p>
        <p>Онлайн-проект Академия здорового тела</p>
        <p>Онлайн-школа английского ID English</p>
        <p>Онлайн-проект "Krafti"</p>
        <p>Онлайн-проект ITGIRLS</p>
        <p>Онлайн-школа "Мега Мама"</p>
        <p>Онлайн-проект "Альфа"</p>
        <p>Институт Life Practic</p>
      </div>
    </div>
  )
}
