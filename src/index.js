import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux";

import Home from './Home';

render(
  <BrowserRouter>
    <Provider store={store}>      
      <div> 
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
, document.getElementById("root"));