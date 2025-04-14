
import logo from '../assets/imgs/CAL_logo.png'


import gulf from './imgs/gulf.webp'

import lancia1 from './imgs/lancia2.jpg'
import lancia2 from './imgs/lancia3.webp'
import lancia3 from './imgs/lancia4.jpg'
import martini from './imgs/martini.jpg'

import jps from './imgs/jps.jpg'
import jps2 from './imgs/jpsC.png'

import ms_marl from './imgs/michael_schumacher_ferrari_marlboro3.jpg'

import quattro1 from './imgs/quattro_s1.avif'

import quattro2 from './imgs/replica_s1.jpg'

import senna_marl from './imgs/senna_marl.jpg'

import './login.css'

function App() {
  //The parent div covers the entire screen. Thereby stretching the
  //body with it

  //the logo_container is position absolute. rotated to form the logo

  //the img_container is 100% width/height, with images set on
  //position absolute. 

  //when body is hovered on, width and height of img_container is reduced
    
  return (
    <div style={{height:"100vh", width:"100vw"}}>
        <div className='logo_container'>
          <img className='logo' src={logo} alt="Classic Autosport Liveries Logo"/>
        </div>

        <div className='img_container'>
          <img className='hero_img' src={quattro2} alt="Classic Autosport Liveries Logo"/>
          <img className='hero_img' src={lancia2} alt="Classic Autosport Liveries Logo"/>
          <img className='hero_img' src={martini} alt="Classic Autosport Liveries Logo"/>
          <img className='hero_img' src={jps} alt="Classic Autosport Liveries Logo"/>
          <img className='hero_img' src={quattro1} alt="Classic Autosport Liveries Logo"/>
          <img className='hero_img' src={lancia3} alt="Classic Autosport Liveries Logo"/>
          <img className='hero_img' src={gulf} alt="Classic Autosport Liveries Logo"/>
          <img className='hero_img' src={ms_marl} alt="Classic Autosport Liveries Logo"/>
          <img className='hero_img' src={lancia1} alt="Classic Autosport Liveries Logo"/>
          <img className='hero_img' src={jps2} alt="Classic Autosport Liveries Logo"/>
          <img className='hero_img' src={senna_marl} alt="Classic Autosport Liveries Logo"/>
        </div>

        
    </div>
  )
}

export default App