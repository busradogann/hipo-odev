import React, { Component } from "react";
import { fetchImages } from "../network/NetworkRequests";

import "./Logo/_logo.scss";
import "./_listpage.scss";

import Logo from "./Logo/Logo";
import Form from "../Core/Form/Form";
import Images from "./Images/Images";

export default class Listpage extends Component {
    constructor(props){
        super(props);

        this.state = {
            images : []
        }
    }

    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const query = params.get("query");
        const collectionID = params.get("collectionID");

        fetchImages({
            query,
            collectionID,
        }).then( data => this.setState( { images : data.results }));
    };

    render(){
        const { images } = this.state;
        return(
            <div className={"list-page"}>
                <section className={"list-page-header"}>
                    <Logo />
                    <Form />
                </section>
                <section className={"list-page-body"}>
                    <Images
                        images={images}
                    />
                </section>
            </div>
        );
    }
}