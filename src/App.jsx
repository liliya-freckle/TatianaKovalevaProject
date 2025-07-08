import './App.css';
import './styles/global.scss';
import Services from './components/Page3/Services';
import AboutMe from './components/Page2/AboutMe';
import JobStages from './components/Page5/JobStages';
import Contacts from './components/Page6/Contacts';
import CasesMainPage from './components/Page4/CasesMainPage';

function App() {
  
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/cases" element={<CasesMainPage/>}/>
          <Route path="/jobstages" element={<JobStages/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
