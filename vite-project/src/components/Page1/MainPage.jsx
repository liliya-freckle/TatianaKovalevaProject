import React from "react";
import Button from "../Button/Button";
import Services from "../Page 3/Services";
import NavigationBar from "./NavigationBar";

const MainPage = () => {
  return (
    <>
      <NavigationBar/>
      <div>Обо мне</div>
      <Button>Связаться</Button>
    </>
  );
};

export default MainPage;
