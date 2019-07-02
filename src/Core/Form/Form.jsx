import React, { Component } from "react";

import InputLocation from "../Location/InputLocation";
import CustomDropdown from "../../Core/Collections/CustomDropdown";
import SearchButton from "../../Core/Button/SearchButton";

import "./_form.scss";

const API_COLLECTIONS = "https://api.unsplash.com/collections/featured/?client_id=930640e0b7713dca3ab1a0751b6f4b4741d1dfca6a72be2a071cddd6c1d0c92c";

export default class Form extends Component {
    state = {
        query: "",
        selectedOption: null,
        collections: []
    }

    handleInputLocationChange = (value) => {
        this.setState({
            query: value
        });
    }

    changeCollection = (value) => {
        this.setState({
            selectedOption: value
        });
    }

    componentDidMount = () => {
        const url = `${API_COLLECTIONS}&per_page=10`;

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                                                    collections : data
            }));
    }

    render() {
        const {
            query,
            collections,
            selectedOption
        } = this.state;

        return(
            <div className={"form-wrapper"}>
                <InputLocation onChange={this.handleInputLocationChange}
                               value={query}/>

                <CustomDropdown onChange={this.changeCollection}
                                optionArray={collections}
                                selectedOption={selectedOption}/>

                <SearchButton query={query}
                              selectedOption={selectedOption}/>
            </div>
        );
    }
}