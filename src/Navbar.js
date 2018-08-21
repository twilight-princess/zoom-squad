import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div class="topnav" id="navbar">
                <span class="leftNav" id="home"></span>
                <Link to="/" class="leftNav" id="itemA">Dog Finder</Link>
                <Link to="/Contact" class="rightNav" id="itemB">Contact</Link>
                <span class="rightNav" id="spaceA"></span>
                <Link to="/Saved-Pets" class="rightNav" id="itemC">Saved Pets</Link>
                <span class="rightNav" id="spaceB"></span>
                <Link to="/Dogs" class="rightNav" id="itemD">Dogs</Link>
            </div>
        </div>
    )
}

export default Navbar
