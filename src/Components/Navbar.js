import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <div className="container">
        <nav className="navbar">
        <div className="navbar-left">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZcKdPROUXGpZX6993bTyP4wmvpMDHdGnU7U-3GW4fg3kM22TaHJkLsefVFWxy_gPeVU&usqp=CAU" alt="" className="logo" /> 

        <ul className="nav-links">
        <li>
            <NavLink to="/login">Login</NavLink>
            </li>  
            <li>
            <NavLink to="/about">About</NavLink>
            </li>  
            <li>
            <NavLink to ="/home">Home</NavLink>
            </li>
            
        </ul>
        </div>
        </nav>
        </div>
    
        </>
    )
}

export default Navbar;