import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Dogs from './Dogs';
import SavedPets from './SavedPets';
import savedDog from './SavedDog';
import Contact from './Contact';

import { Switch, Route } from "react-router-dom";


export default class App extends Component { 
    render() {
        return (
            <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Dogs" component={Dogs}/>
                <Route path="/Saved-Pets" component={SavedPets}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Dogs/:id" component={savedDog}/>
            </Switch>
            </div>
            
        )
    }
}