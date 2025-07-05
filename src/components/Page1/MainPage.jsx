import Banner from './Banner'
import Services from '../Page3/Services'
import AboutMe from '../Page2/AboutMe'
import Cases from '../Page4/Cases'
import JobStages from '../Page5/JobStages'
import Contacts from '../Page6/Contacts'

const MainPage = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Services id='services' />
      <Cases />
      <JobStages id='jobstages' />
      <Contacts id='contacts' />
    </>
  )
}

export default MainPage
