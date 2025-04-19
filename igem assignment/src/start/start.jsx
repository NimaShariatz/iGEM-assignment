
import logo from '../assets/imgs/CAL_logo.png'
import marl_logo from './imgs/marl_red.png'
import quattro_logo from './imgs/audi_logo.png'
import martini_logo from './imgs/martini_logo.png'
import jps_logo from './imgs/jps-logo2clear.png'
import gulf_logo from './imgs/Gulf_Oil_Logo.png'

import './start.css'
import { Link } from 'react-router-dom'

function Start() {
  //The parent div covers the entire screen. Thereby stretching the
  //body with it

  //the logo_container is position absolute. rotated to form the logo

  //the img_container is 100% width/height, with images set on
  //position absolute. 

  //when body is hovered on, width and height of img_container is reduced
    
  return (
    <div style={{height:"100vh", minWidth:"100vw", display:'flex'}}> {/*have our image container match screen width and height*/}
        <div className='logo_container'>
          <img className='logo' src={logo} alt="Classic Autosport Liveries Logo"/>
        </div>

        <div className='img_container'>

          <div className='hero_img img1'>
            <div className='img_text_section'>
              <h1>Audi Quattro S1 &#40;1985&#41;</h1>
              <h3>World Rally Championship</h3>
            </div>
          </div>


          <div className='hero_img img2'>
            <div className='img_text_section'>
              <h1>Lancia 037 &#40;1982&#41;</h1>
              <h3>World Rally Championship</h3>
            </div>
          </div>

          <div className='hero_img img3'>
            <div className='img_text_section'>
              <h1>Lotus 98T &#40;1986&#41;</h1>
              <h3>Formula One</h3>
            </div>
          </div>

          <div className='hero_img img4'>
            <div className='img_text_section'>
              <h1>Audi Quattro S1 &#40;1985&#41;</h1>
              <h3>World Rally Championship</h3>
            </div>
          </div>

          <div className='hero_img img5'>
            <div className='img_text_section'>
              <h1>Lotus 98T &#40;1986&#41;</h1>
              <h3>World Rally Championship</h3>
            </div>
          </div>

          <div className='hero_img img6'>
            <div className='img_text_section'>
              <h1>McLaren F1 GTR &#40;1997&#41;</h1>
              <h3>GT Championship</h3>
            </div>
          </div>

          <div className='hero_img img7'>
            <div className='img_text_section'>
              <h1>Lancia Delta S4 &#40;1985&#41;</h1>
              <h3>Group B</h3>
            </div>
          </div>

          <div className='hero_img img8'>
            <div className='img_text_section'>
              <h1>Lancia 037 &#40;1982&#41;</h1>
              <h3>World Rally Championship</h3>
            </div>
          </div>

          <div className='hero_img img9'>
            <div className='img_text_section'>
              <h1>Sierra Cosworth RSes &#40;1993&#41;</h1>
              <h3>Group A</h3>
            </div>
          </div>

          <div className='hero_img img10'>
            <div className='img_text_section'>
              <h1>Ferrari F2004</h1>
              <h3>Formula One</h3>
            </div>
          </div>

          <div className='hero_img img11'>
            <div className='img_text_section'>
              <h1>McLaren MP4/5 &#40;1989&#41;</h1>
              <h3>Formula One</h3>
            </div>
          </div>

          <div className='hero_img img12'>
            <div className='img_text_section'>
              <h1>Porsche 917 &#40;1969&#41;</h1>
              <h3>World Sportscar Championship</h3>
            </div>
          </div>

          <div className='hero_img img13'>
            <div className='img_text_section'>
              <h1>Sierra Cosworth RSes &#40;1993&#41;</h1>
              <h3>Group A</h3>
            </div>
          </div>

        </div>{/*.img_container*/}

      <div className='menu_container'>
        <div style={{display:"flex", gap:"10px"}}>{/*When CSS is hardcoded by 'style=', it ignores anything in start.css.
        This includes the @media query used(for smaller screen widths. mobile). Hence 'style=' should be used sparingly as its bad practice*/}

          
          <Link to={"/marlboro-club"} style={{width:"100%", height:"100%"}}>
            <img src={marl_logo} alt="marlboro logo" className='menu_background_img'/>
          </Link>

          <img src={quattro_logo} alt="quattro logo" className='menu_background_img'/>

          <img src={martini_logo} alt="martini logo" className='menu_background_img'/>

          <img src={jps_logo} alt="jps logo" className='menu_background_img'/>

          <img src={gulf_logo} alt="gulf logo" className='menu_background_img'/>

        </div>
      </div>

        
    </div>
  )
}

export default Start