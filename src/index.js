import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './navbar.css';
import './dogs.css';
import './savedDog.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(  
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById("root"));