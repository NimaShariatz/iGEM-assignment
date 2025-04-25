
import logo from '../assets/imgs/CAL_logo.png'


function Menu(){

    return(
        <div>

                    
            <div className="menu_container">
                <ul>

                    <li>
                        <div>
                            <img className='menu_logo' src={logo} alt="Classic Autosport Liveries Logo"/>
                        </div>
                    </li>

                    <li>
                        <p className='menu_title'>Classic Autosport Liveries</p>
                    </li>


                    <li className='has_submenu'>
                        <p className='club'>MARLBORO CLUB</p>
                    </li>

                    <li>
                        <p className='club'>QUATTRO CLUB</p>
                    </li>

                    <li>
                        <p className='club'>MARTINI CLUB</p>
                    </li>

                    <li>
                        <p className='club'>JPS CLUB</p>
                    </li>

                    <li>
                        <p className='club'>GULF CLUB</p>
                    </li>

                </ul>


                

            </div>{/* menu */}



        </div>
        


    );

}
export default Menu