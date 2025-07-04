import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Page1/MainPage';
import './styles/global.scss';
import Services from './components/Page3/Services';
import AboutMe from './components/Page2/AboutMe';
import Cases from './components/Page4/Cases';
import JobStages from './components/Page5/JobStages';
import Contacts from './components/Page6/Contacts';


function App() {

  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/cases" element={<Cases/>}/>
          <Route path="/jobstages" element={<JobStages/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </div>
    </Router>


  )
}

export default App
