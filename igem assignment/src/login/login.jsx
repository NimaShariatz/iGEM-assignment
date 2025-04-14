
import logo from '../assets/imgs/CAL_logo.png'


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

        <div style={{width: "100%", height:"100%"}}>

          <div className='img_container'>
            <div className='hero_img img1'></div>
            <div className='hero_img img2'></div>
            <div className='hero_img img3'></div>
            <div className='hero_img img4'></div>
            <div className='hero_img img5'></div>
            <div className='hero_img img6'></div>
            <div className='hero_img img7'></div>
            <div className='hero_img img8'></div>
            <div className='hero_img img9'></div>
            <div className='hero_img img10'></div>
            <div className='hero_img img11'></div>
            <div className='hero_img img12'></div>
            <div className='hero_img img13'></div>
          </div>
        </div>

        
    </div>
  )
}

export default App