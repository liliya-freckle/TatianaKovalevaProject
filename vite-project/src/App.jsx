import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Page1/MainPage';
import './styles/global.scss';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App
