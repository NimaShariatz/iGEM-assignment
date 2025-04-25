import './marl_club.css'
import './menu.css'


import Menu from './Menu' //menu component
import marlboro_video1 from './video/Marlboro_f1V2.mp4'
import ayert from './imgs/ayert1.jpg'



function Marl_club() {

    return(
        <div>
            <Menu/>



            
            <div className='flex_content'>
                <div className='text_section'>
                    <h1 className='marlboro'>MARLBORO CLUB</h1>
                    <p>Prior to the 2006 FIA tobacco ban, billions of dollars were pumped into motorsports in exchange for banners and liveries. 
                    Marlboro would sponser some of the most famous autosport teams to ever compete.</p>
                </div>

                <div className='video_section'>
                    <video autoPlay muted loop className="marl_video">
                        <source src={marlboro_video1} type="video/mp4" />
                    </video>
                </div>
            </div>
            

            

                <div className='ayert_background'>
                    <div className='dark_gradient'>
                        <h1 className='formula_text'>Formula One</h1>
                    </div>

                </div>

            
            <p>asdasdasd</p>


        </div>

        



    )

}

export default Marl_club