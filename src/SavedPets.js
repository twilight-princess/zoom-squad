import React from "react";
import Navbar from './Navbar';  
import { Switch, Route, Link } from "react-router-dom";

function SavedPets () {  
    return (
        <div>
        <div class="results"></div>
            <div class="dogGrid">
                <div class="box1"><div class="text1">Penny | 3 years<Link to="/Dogs/Saved-Dog"><img class="dog1" src="https://www.what-dog.net/Images/faces2/scroll001.jpg"/></Link></div></div>
                <div class="box1"><div class="text1">Sammy | 4 years<img class="dog1" src="https://www.what-dog.net/Images/faces2/scroll001.jpg"/></div></div>
                <div class="box1"><div class="text1">Frodo | 2 years<img class="dog1" src="https://www.what-dog.net/Images/faces2/scroll001.jpg"/></div></div>
                <div class="box1"><div class="text1">Pidgy | 6 Months<img class="dog1" src="https://www.what-dog.net/Images/faces2/scroll001.jpg"/></div></div>
                <div class="box1"><div class="text1">Penny | 3 Months<img class="dog1" src="https://www.what-dog.net/Images/faces2/scroll001.jpg"/></div></div>
                <div class="box1"><div class="text1">Sammy | 4 Years<img class="dog1" src="https://www.what-dog.net/Images/faces2/scroll001.jpg"/></div></div>
            </div>
        </div>
    )
}

export default SavedPets;