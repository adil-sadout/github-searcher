import React from 'react';
import PropTypes from 'prop-types';


function Navbar({icon,title}){
    return  (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </nav>
    )
}


Navbar.defaultProps ={
    title:"Chercheur Github",
    icon:"fa-github fab"
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;