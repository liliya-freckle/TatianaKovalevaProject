import "./NavigationBar.scss";
import React, { useState } from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToWithOffset = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth <= 1000 ? 50 : 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const scrollToWithOffsetMobile = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 40;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };
  return (
    <>
      <div className="burger_container">
        <div
          className={`burger-icon ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a
          href="#aboutme"
          onClick={(e) => {
            e.preventDefault();
            if (window.innerWidth <= 1000) {
              scrollToWithOffsetMobile("aboutme");
            } else {
              scrollToElement("aboutme");
            }
          }}
        >
          Обо мне
        </a>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToWithOffset("services");
          }}
        >
          Услуги
        </a>
        <a
          href="#cases"
          onClick={(e) => {
            e.preventDefault();
            scrollToWithOffset("cases");
          }}
        >
          Кейсы
        </a>
        <a
          href="#jobstages"
          onClick={(e) => {
            e.preventDefault();
            if (window.innerWidth <= 1000) {
              scrollToWithOffsetMobile("jobstages");
            } else {
              scrollToElement("jobstages");
            }
          }}
        >
          Этапы работы
        </a>
        <a
          href="#contacts"
          onClick={(e) => {
            e.preventDefault();
            if (window.innerWidth <= 1000) {
              scrollToWithOffsetMobile("contacts");
            } else {
              scrollToElement("contacts");
            }
          }}
        >
          Контакты
        </a>
      </nav>
    </>
  );
};

export default NavigationBar;
