import React from "react";
import Button from "../Button/Button";
import Services from "../Page 3/Services";
import NavigationBar from "./NavigationBar";
import AboutMe from "../Page2/AboutMe";
import Cases from "../Page4/Cases";
import JobStages from "../Page5/JobStages";
import Contacts from "../Page6/Contacts";


const MainPage = () => {
  return (
    <>
      <NavigationBar/>
      <div>Обо мне</div>
      <Button>Связаться</Button>
      <AboutMe id="aboutme"/>
      <Services id="services"/>
      <Cases id="cases"/>
      <JobStages id="jobstages"/>
      <Contacts id="contacts"/>
    </>
  );
};

export default MainPage;
