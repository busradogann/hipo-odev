import React, { Component } from 'react';
import './_logo.scss';
import {Link} from "react-router-dom";

export default class Logo extends Component {

    render() {
        return(
            <Link to={'/'}>
                <div className={"logo"}>

                </div>
            </Link>
        );
    }
}