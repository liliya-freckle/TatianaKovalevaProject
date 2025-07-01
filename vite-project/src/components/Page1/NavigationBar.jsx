import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <>
      <Link to="/aboutme">Обо мне</Link>
      <Link to="/services">Услуги</Link>
      <Link to="/cases">Кейсы</Link>
      <Link to="/jobstages">Этапы работы</Link>
      <Link to="/contacts">Контакты</Link>
    </>
  )
}

export default NavigationBar