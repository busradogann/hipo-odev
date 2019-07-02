import React, { Component } from "react";

import Logo from "./Logo/Logo";
import Form from "../Core/Form/Form";

import "./_homepage.scss";

export default class Homepage extends Component {
    render() {

        return(
            <div className={"home-page"}>
                <Logo/>
                <Form/>
            </div>
        );
    }
}