import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <>
      <a href="#aboutme">Обо мне</a>
      <a href="#services">Услуги</a>
      <a href="#cases">Кейсы</a>
      <a href="#jobstages">Этапы работы</a>
      <a href="#contacts">Контакты</a>
    </>
  )
}

export default NavigationBar