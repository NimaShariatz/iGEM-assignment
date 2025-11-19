
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
                        <div className='submenu_container'>

                            <div className='submenu_flex'>
                                <div className='left_section'>
                                    
                                    <div className='section_column'>
                                        <div className='menu_option'>
                                            <h3>Overview</h3>
                                            <p>An retrospective of the Marlboro brand in various forms of motorsport throughout the decades</p>
                                        </div>
                                        <div className='menu_option'>
                                            <h3>Formula One</h3>
                                            <p>A look at Marlboro sponsorship during the V8, V12, and V10 era</p>
                                        </div>
                                        <div className='menu_option'>
                                            <h3>WRC/Group Rally</h3>
                                            <p>Iconic Marlboro sponsorships in WRC and Group rallying</p>
                                        </div>
                                    </div>


                                </div>{/* left_section */}

                                <div className='right_section'>
                                    <div className='section_column'>
                                        <div className='red_section'>
                                            <div className='menu_option_red'>
                                                <h3>Marlboro Liveries</h3>
                                                <p>The campaign drive and international recognition</p>
                                            </div>  
                                            <div className='menu_option_red'>
                                                <h3>The Tobacco Ban</h3>
                                                <p>The final years of tobacco liveries</p>
                                            </div>  
                                        </div>

                                        <div className='menu_option' style={{marginTop:"25px"}}>
                                                <h3>Racing Icons</h3>
                                                <p>The professionals with Marlboro embossing</p>
                                        </div>  

                                    </div>
                                </div>{/* right_section */}

                            </div>{/* submenu_flex */}

                        </div>{/* submenu_container */}
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