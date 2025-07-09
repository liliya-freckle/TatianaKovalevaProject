import Advantages from './Advantages/Advantages'
import About from './About/About'
import Carousel from '../Carousel/Carousel'
import './AboutMe.scss'

const DiplomaImages = [
  '/TatianaKovalevaProject/diploma/diploma1.png',
  '/TatianaKovalevaProject/diploma/diploma2.png',
  '/TatianaKovalevaProject/diploma/diploma3.jpg',
  '/TatianaKovalevaProject/diploma/diploma4.jpg',
  '/TatianaKovalevaProject/diploma/diploma5.png',
  '/TatianaKovalevaProject/diploma/diploma6.png',
  '/TatianaKovalevaProject/diploma/diploma7.jpg',
  '/TatianaKovalevaProject/diploma/diploma8.png',
  '/TatianaKovalevaProject/diploma/diploma9.jpg',
  '/TatianaKovalevaProject/diploma/diploma10.png'
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