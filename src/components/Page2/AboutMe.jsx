import Advantages from './Advantages/Advantages'
import About from './About/About'
import Carousel from '../Carousel/Carousel'
import './AboutMe.scss'

const DiplomaImages = [
  '${import.meta.env.BASE_URL}/diploma/diploma1.png',
  '${import.meta.env.BASE_URL}/diploma/diploma2.png',
  '${import.meta.env.BASE_URL}/diploma/diploma3.jpg',
  '${import.meta.env.BASE_URL}/diploma/diploma4.jpg',
  '${import.meta.env.BASE_URL}/diploma/diploma5.png',
  '${import.meta.env.BASE_URL}/diploma/diploma6.png',
  '${import.meta.env.BASE_URL}/diploma/diploma7.jpg',
  '${import.meta.env.BASE_URL}/diploma/diploma8.png',
  '${import.meta.env.BASE_URL}/diploma/diploma9.jpg',
  '${import.meta.env.BASE_URL}/diploma/diploma10.png'
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