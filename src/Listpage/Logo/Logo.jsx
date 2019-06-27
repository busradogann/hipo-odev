import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./_logo.scss";

export default class Logo extends Component {
    render() {
        return(
            <Link to={"/"}>
                <div className={"logo"}>

                </div>
            </Link>
        );
    }
}