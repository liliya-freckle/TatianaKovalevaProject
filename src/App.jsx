import './App.css';
import './styles/global.scss';
import Services from './components/Page3/Services';
import AboutMe from './components/Page2/AboutMe';
import Cases from './components/Page4/Cases';
import JobStages from './components/Page5/JobStages';
import Contacts from './components/Page6/Contacts';
import Banner from './components/Page1/Banner';
import NavigationBar from './components/Page1/NavigationBar';

function App() {
  
  return (
    <>
      <NavigationBar />
      <Banner />
      <AboutMe id='aboutme' />
      <Services id='services' />
      <Cases />
      <JobStages id='jobstages' />
      <Contacts id='contacts' />
    </>
  )
}

export default App
