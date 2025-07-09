import React from 'react'
import Carousel from '../../Carousel/Carousel'

const FeedbackImages=[
    '${import.meta.env.BASE_URL}/feedback/1.png',
    '${import.meta.env.BASE_URL}/feedback/2.jpg',
    '${import.meta.env.BASE_URL}/feedback/3.jpg',
    '${import.meta.env.BASE_URL}/feedback/4.png',
    '${import.meta.env.BASE_URL}/feedback/5.jpg',
    '${import.meta.env.BASE_URL}/feedback/6.jpg',
    '${import.meta.env.BASE_URL}/feedback/7.jpg',
    '${import.meta.env.BASE_URL}/feedback/8.png',
    '${import.meta.env.BASE_URL}/feedback/9.jpg',
    '${import.meta.env.BASE_URL}/feedback/10.jpg',
    '${import.meta.env.BASE_URL}/feedback/11.jpg',
    '${import.meta.env.BASE_URL}/feedback/12.jpg',
    '${import.meta.env.BASE_URL}/feedback/13.jpg',
    '${import.meta.env.BASE_URL}/feedback/14.jpg',
    '${import.meta.env.BASE_URL}/feedback/15.png',
    '${import.meta.env.BASE_URL}/feedback/16.jpg',
    '${import.meta.env.BASE_URL}/feedback/17.jpg',
    '${import.meta.env.BASE_URL}/feedback/18.jpg',
    '${import.meta.env.BASE_URL}/feedback/19.jpg',
    '${import.meta.env.BASE_URL}/feedback/20.jpg',
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