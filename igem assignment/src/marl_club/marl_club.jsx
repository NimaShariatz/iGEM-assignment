import './marl_club.css'
import logo from '../assets/imgs/CAL_logo.png'







function Marl_club() {

    return(
        
        <div className="menu_container">
            <ul>

                <li>
                    <div>
                        <img className='menu_logo' src={logo} alt="Classic Autosport Liveries Logo"/>
                    </div>
                </li>


                <li className='has_submenu'>
                    <p>MARLBORO CLUB</p>
                    <div className='submenu_container'>

                    </div>
                </li>

                <li>
                    <p>QUATTRO CLUB</p>
                </li>

                <li>
                    <p>MARTINI CLUB</p>
                </li>

                <li>
                    <p>JPS CLUB</p>
                </li>

                <li>
                    <p>GULF CLUB</p>
                </li>

            </ul>


            

        </div>




    )

}

export default Marl_club