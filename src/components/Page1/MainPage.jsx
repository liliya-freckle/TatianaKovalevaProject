import Banner from './Banner'
import Services from '../Page3/Services'
import AboutMe from '../Page2/AboutMe'
import CasesMainPage from '../Page4/CasesMainPage'
import JobStages from '../Page5/JobStages'
import Contacts from '../Page6/Contacts'

const MainPage = () => {
  return (
    <>
      <Banner />
      <AboutMe id='aboutme' />
      <Services id='services' />
      <CasesMainPage id='cases' />
      <JobStages id='jobstages' />
      <Contacts id='contacts' />
    </>
  )
}

export default MainPage
