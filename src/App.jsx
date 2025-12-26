import './App.css';
import './styles/global.scss';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Page1/NavigationBar'
import Banner from './components/Page1/Banner'
import Services from './components/Page3/Services';
import AboutMe from './components/Page2/AboutMe';
import JobStages from './components/Page5/JobStages';
import Contacts from './components/Page6/Contacts';
import CasesMainPage from './components/Page4/CasesMainPage';
// import MainPage from './components/Page1/MainPage';

function App() {
  
  return (
    <>
      <NavigationBar/>
      <Banner />
      <AboutMe id='aboutme' />
      <Services id='services' />
      <CasesMainPage id='cases' />
      <JobStages id='jobstages' />
      <Contacts id='contacts' />
    </>
  )
}

export default App
