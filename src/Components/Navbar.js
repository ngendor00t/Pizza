import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <>
         <nav className="navbar"> 
        <div className="container">
        {/* <nav className="navbar">  */}
        {/* <div className="navbar-left"> */}

        {/* <div> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZcKdPROUXGpZX6993bTyP4wmvpMDHdGnU7U-3GW4fg3kM22TaHJkLsefVFWxy_gPeVU&usqp=CAU" alt="" className="logo" /> 
        {/* </div> */}

        <div className='links'><ul className="nav-links">
        <li>
            <NavLink to="/login"><p className='link-name'>Login</p></NavLink>
            </li>  
            
            <li>
            <NavLink to ="/home"><p className='link-name'>Home</p></NavLink>
            </li>
            <li>
                <NavLink to="Delivery"><p className='link-name'>Delivery</p> </NavLink>
            </li>
            <li>
            <NavLink to="/Map"><p className='link-name'>Map</p></NavLink>
        </li>  
            
            <li>
            <NavLink to="/about"><p className='link-name'>About</p></NavLink>
            </li>  
            
        </ul> </div>
        <div></div>
        {/* </div> */}
         {/* </nav> */}
        </div>
        </nav>
    
        </>
    )
}

export default Navbar;