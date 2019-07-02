import React, { Component } from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Homepage from "./Homepage/Homepage";

export default class App extends Component {
    render() {
        return (
            <div className={"app"}>
                <BrowserRouter>
                    <Switch>
                        <Route exact
                               path={"/"}
                               component={Homepage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}