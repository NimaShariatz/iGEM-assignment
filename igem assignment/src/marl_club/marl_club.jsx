import './marl_club.css'
import './menu.css'


import Menu from './Menu' //menu component
import marlboro_video1 from './video/ayrton_vid.mp4'
import ayert2 from './imgs/ayert2.jpg'


import marlboro_car from './imgs/marlboro_car.jpg'
import marlboro_car2 from './imgs/marlboro_car2.jpg'
import mansell from './imgs/mansell.webp'
import prost_marl from './imgs/Prost-Malboro.jpg'



function Marl_club() {

    return(
        <div style={{display:"flex", flexDirection:"column", width:"100vw", overflow:"hidden"}}>
            <Menu/>


            {/* Section 1 */}
            
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
            
            {/* Section 1 */}


            {/* Section 2 */}

            <div className='ayert_background'>
                <div className='dark_gradient'>
                    <h1 className='formula_text'>Formula One</h1>
                </div>
            </div>

            {/* Section 2 */}

            {/* Section 3 */}

            <div className='ayert_text'>
                <p>
                    Their sponsorship figures were high enough such that they could
                    dictate the color scheme to some extent. Outside of tobacco advertisers, there have not been many examples of companies willing to pay enough to do so. Few 
                    would be more iconic than Ayrton Senna's Mclaren &#40;1988-1993&#41;. The Marlboro livery is one of those rare liveries that stays on your mind on first glance. A use of contrasting colors with complimentary tones, shapes and shades would be used. 
                    The early and later Marlboro liveries were a bit different but the rendition seen on the picture with Senna has become one of the most iconic tobacco liveries and one of the best liveries ever seen in racing in general.
                    Marlboro sponsorship extended beyond the vehicle as well. A driver's suit would be endowed with sponsorships, and by extention Marlboro embossing.
                </p>

                <img src={ayert2} alt="Ayrton Senna"/>

            </div>

            {/* Section 3 */}

            {/* Section 4 */}

            <div className='grid_layout'>

                <img src={marlboro_car}/>
                <img src={prost_marl}/>
                <img src={marlboro_car2}/>
                <img src={mansell}/>

            </div>

            {/* Section 4 */}


        </div>

        



    )

}

export default Marl_club