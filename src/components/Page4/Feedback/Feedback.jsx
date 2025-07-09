import React from 'react'
import Carousel from '../../Carousel/Carousel'

const FeedbackImages=[
    '/feedback/1.png',
    '/feedback/2.jpg',
    '/feedback/3.jpg',
    '/feedback/4.png',
    '/feedback/5.jpg',
    '/feedback/6.jpg',
    '/feedback/7.jpg',
    '/feedback/8.png',
    '/feedback/9.jpg',
    '/feedback/10.jpg',
    '/feedback/11.jpg',
    '/feedback/12.jpg',
    '/feedback/13.jpg',
    '/feedback/14.jpg',
    '/feedback/15.png',
    '/feedback/16.jpg',
    '/feedback/17.jpg',
    '/feedback/18.jpg',
    '/feedback/19.jpg',
    '/feedback/20.jpg',
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
    <Carousel images={FeedbackImages} captions={FeedbackText} />
  )
}

export default Feedback