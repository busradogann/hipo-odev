import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Homepage from './Homepage/Homepage';
import Listpage from "./Listpage/Listpage";

export default class App extends Component {
    render() {
        return (
            <div className={"app"}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/image-list" component={Listpage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}