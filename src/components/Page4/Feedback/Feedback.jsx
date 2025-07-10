import React from 'react'
import Carousel from '../../Carousel/Carousel'
import styles from './Feedback.module.scss'

const FeedbackImages=[
    '/TatianaKovalevaProject/feedback/1.png',
    '/TatianaKovalevaProject/feedback/2.jpg',
    '/TatianaKovalevaProject/feedback/3.jpg',
    '/TatianaKovalevaProject/feedback/4.png',
    '/TatianaKovalevaProject/feedback/5.jpg',
    '/TatianaKovalevaProject/feedback/6.jpg',
    '/TatianaKovalevaProject/feedback/7.jpg',
    '/TatianaKovalevaProject/feedback/8.png',
    '/TatianaKovalevaProject/feedback/9.jpg',
    '/TatianaKovalevaProject/feedback/10.jpg',
    '/TatianaKovalevaProject/feedback/11.jpg',
    '/TatianaKovalevaProject/feedback/12.jpg',
    '/TatianaKovalevaProject/feedback/13.jpg',
    '/TatianaKovalevaProject/feedback/14.jpg',
    '/TatianaKovalevaProject/feedback/15.png',
    '/TatianaKovalevaProject/feedback/16.jpg',
    '/TatianaKovalevaProject/feedback/17.jpg',
    '/TatianaKovalevaProject/feedback/18.jpg',
    '/TatianaKovalevaProject/feedback/19.jpg',
    '/TatianaKovalevaProject/feedback/20.jpg',
]

const FeedbackText=[
  'Отзыв спикера. Онлайн-школа "Неотложка"',
  'Отзыв спикера. Академия фотомастерства Светы Малышевой',
  'Отзыв РОПа. Онлайн-школа "SCHOOL CRYSTALLAND"',
  'Отзыв таргетолога онлайн-школ',
  'Отзыв проджекта. Институт Красоты Анны Капитановой',
  'Отзыв копирайтера. Онлайн-школа "SCHOOL CRYSTALLAND"',
  'Отзыв менеджера. Институт Красоты Анны Капитановой',
  'Отзыв куратора. Институт Красоты Анны Капитановой',
  'Отзыв проджекта. Онлайн-школа "SCHOOL CRYSTALLAND"',
  'Отзыв куратора. Онлайн-школа "SCHOOL CRYSTALLAND"',
  'Отзыв проджекта, Онлайн-школа Ляли Шанти', 
  'Отзыв проджекта, тренинговый центр Павла Ракова',
  'Отзыв проджекта-маркетолога, тренинговый центр Павла Ракова',
  'Отзыв спикера, клуб-наставничество "Год вперед"',
  'Отзыв продюсера онлайн-школ',
  'Отзыв руководителя проектов онлайн-школы "Мега мама"',
]


const Feedback = () => {
  return (
    <Carousel images={FeedbackImages} captions={FeedbackText} calssname={styles.feedback} />
  )
}

export default Feedback