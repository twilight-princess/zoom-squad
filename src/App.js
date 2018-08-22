import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import SavedPets from './SavedPets';
import Dog from './Dog';
import Contact from './Contact';
import SearchForm from './SearchForm';
import { Provider } from "react-redux";
import store from "./redux";

import { Switch, Route } from "react-router-dom";


export default class App extends Component { 
    render() {
        return (
            <Provider store={store}>
                <div> 
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route name="dogs" exact path="/Dogs" component={SearchForm}/>
                        <Route path="/Saved-Pets" component={SavedPets}/>
                        <Route path="/Contact" component={Contact}/>
                        <Route path="/Dogs/:id" component={Dog}/>
                    </Switch>
                </div>
            </Provider>
        )
    }
}