
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

      <div className='img_container'>{/*complete the content inside each <div>*/}

        <div className='hero_img img1'>
        </div>

        <div className='hero_img img2'>
        </div>

        <div className='hero_img img3'>
        </div>

        <div className='hero_img img4'>
        </div>

        <div className='hero_img img5'>
        </div>

        <div className='hero_img img6'>
        </div>

        <div className='hero_img img7'>
        </div>

        <div className='hero_img img8'>
        </div>

        <div className='hero_img img9'>
        </div>

        <div className='hero_img img10'>
        </div>

        <div className='hero_img img11'>
        </div>

        <div className='hero_img img12'>
        </div>

        <div className='hero_img img13'>
        </div>

      </div>{/*.img_container*/}



      {/*create .menu_container here*/}


        
    </div>
  )
}

export default Start