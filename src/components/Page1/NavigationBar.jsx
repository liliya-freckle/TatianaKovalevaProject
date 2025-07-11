import './NavigationBar.scss'
import React, { useState } from 'react';


const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToWithOffset = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  const handleNavClick = () => {
        setIsMenuOpen(false);
    };
  return (
    <>
    <div 
        className={`burger-icon ${isMenuOpen ? 'open' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
      <a href="#aboutme" onClick={handleNavClick}>Обо мне</a>
      <a href="#services" onClick={handleNavClick}>Услуги</a>
      <a href="#cases" onClick={(e) => {
              e.preventDefault();
              scrollToWithOffset('cases');
            }}>Кейсы</a>
      <a href="#jobstages" onClick={handleNavClick}>Этапы работы</a>
      <a href="#contacts" onClick={handleNavClick}>Контакты</a>
    </nav>
    </>
  )
}

export default NavigationBar