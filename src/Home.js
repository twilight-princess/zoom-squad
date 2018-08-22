import React from "react";
import Navbar from './Navbar';  

function Home () {  
    return (
        <div>
        <div class="frontImage">
            <img class="frontPhoto" src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180316113418-travel-with-a-dog-3.jpg" alt="Picture of Dog"/>
            </div>
            <div class="conceptIntro">Dog Finder</div>
            <div class="emptySpace">
            <div class="plots1"><h1 class="plotsHead">Helping you find the dog you want</h1>
                <h5 class="plotText">Through all of the data we have gathered on dogs up for adoption we can assist you in finding the dog you have been looking for. Using our advanced search enginer, we can filter through all the dogs we know of based off of breed, age, and price inorder to help you find a dog has quickly as possible.</h5>
            </div>
            </div>
        </div>
    )
}

export default Home;

