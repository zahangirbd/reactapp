import React, { Component } from 'react';

//Stateless functional component
const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar{" "}
                <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
     );
}
 
export default NavBar;
