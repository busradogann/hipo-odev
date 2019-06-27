import React, { Component } from "react";

import "./_homepage.scss";

import Logo from "./Logo/Logo";
import Form from "../Core/Form/Form";

export default class Homepage extends Component {
    render() {
        return(
            <div className={"home-page"}>
                <Logo />
                <Form />
            </div>
        );
    }
}