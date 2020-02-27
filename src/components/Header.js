import React from 'react'

const Header = () => {
    return(
        <nav>
            <div className="nav-wrapper #0d47a1 blue darken-4">
            <a href="!#" className="brand-logo">Machine Control</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Profile</a></li>
                <li><a href="badges.html">Image</a></li>
                <li><a href="collapsible.html">Logout</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Header