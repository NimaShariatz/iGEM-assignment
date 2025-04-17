
import logo from '../assets/imgs/CAL_logo.png'


import './start.css'

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

            <div className='hero_img img1'>
              <div className='img_text_section'>
                <h1 className='img_text'>Audi Quattro S1 &#40;1985&#41;</h1>
                <h3>World Rally Championship</h3>
              </div>
            </div>


            <div className='hero_img img2'>
              <div className='img_text_section'>
                <h1 className='img_text'>Lancia 037 &#40;1982&#41;</h1>
                <h3>World Rally Championship</h3>
              </div>
            </div>

            <div className='hero_img img3'>
              <div className='img_text_section'>
                <h1 className='img_text'>Lotus 98T &#40;1986&#41;</h1>
                <h3>Formula One</h3>
              </div>
            </div>

            <div className='hero_img img4'>
              <div className='img_text_section'>
                <h1 className='img_text'>Audi Quattro S1 &#40;1985&#41;</h1>
                <h3>World Rally Championship</h3>
              </div>
            </div>

            <div className='hero_img img5'>
              <div className='img_text_section'>
                <h1 className='img_text'>Lotus 98T &#40;1986&#41;</h1>
                <h3>World Rally Championship</h3>
              </div>
            </div>

            <div className='hero_img img6'>
              <div className='img_text_section'>
                <h1 className='img_text'>McLaren F1 GTR &#40;1997&#41;</h1>
                <h3>GT Championship</h3>
              </div>
            </div>

            <div className='hero_img img7'>
              <div className='img_text_section'>
                <h1 className='img_text'>Lancia Delta S4 &#40;1985&#41;</h1>
                <h3>Group B</h3>
              </div>
            </div>

            <div className='hero_img img8'>
              <div className='img_text_section'>
                <h1 className='img_text'>Lancia 037 &#40;1982&#41;</h1>
                <h3>World Rally Championship</h3>
              </div>
            </div>

            <div className='hero_img img9'>
              <div className='img_text_section'>
              <h1 className='img_text'>Sierra Cosworth RSes &#40;1993&#41;</h1>
              <h3>Group A</h3>
              </div>
            </div>

            <div className='hero_img img10'>
              <div className='img_text_section'>
                <h1 className='img_text'>Ferrari F2004</h1>
                <h3>Formula One</h3>
              </div>
            </div>

            <div className='hero_img img11'>
              <div className='img_text_section'>
                <h1 className='img_text'>McLaren MP4/5 &#40;1989&#41;</h1>
                <h3>Formula One</h3>
              </div>
            </div>

            <div className='hero_img img12'>
              <div className='img_text_section'>
                <h1 className='img_text'>Porsche 917 &#40;1969&#41;</h1>
                <h3>World Sportscar Championship</h3>
              </div>
            </div>

            <div className='hero_img img13'>
              <div className='img_text_section'>
                <h1 className='img_text'>Sierra Cosworth RSes &#40;1993&#41;</h1>
                <h3>Group A</h3>
              </div>
            </div>

          </div>{/*.img_container*/}

        </div>

        
    </div>
  )
}

export default App