import Advantages from './Advantages/Advantages'
import About from './About/About'
import Carousel from '../Carousel/Carousel'
import './AboutMe.scss'

const DiplomaImages = [
  '/diploma/diploma1.png',
  '/diploma/diploma2.png',
  '/diploma/diploma3.jpg',
  '/diploma/diploma4.jpg',
  '/diploma/diploma5.png',
  '/diploma/diploma6.png',
  '/diploma/diploma7.jpg',
  '/diploma/diploma8.png',
  '/diploma/diploma9.jpg',
  '/diploma/diploma10.png'
]

const AboutMe = () => {

  return (
    <section id="aboutme">
    <About />
    <Advantages />
    <Carousel images={DiplomaImages}/>
    </section>
  )
}

export default AboutMe