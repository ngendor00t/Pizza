import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer=()=>{
    return(
        <div className='container'>
            <div className='Footer'>
        <ul className="nav-links">
        <li>
            <NavLink to="/Map">map</NavLink>
        </li>  
            <li>
                <NavLink to="Delivery">Delivery</NavLink>
            </li>
        </ul>
        </div>
        </div>

    );
}
export default Footer;