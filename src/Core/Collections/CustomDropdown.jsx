import React, { Component } from "react";

import "./_custom-dropdown.scss";

export default class CustomDropdown extends Component {
    onCollectionChange = (event) => {
        this.props.onChange(event.target.value)
    }
    render() {
        const {optionArray} = this.props;
        return (
            <div className={"custom-dropdown-wrapper"}>
                <div className={"shadow"} />
                <select className={"select-collections"}
                        onChange={this.onCollectionChange}>
                    {optionArray.map(option =>
                        <option key={option.id}
                                value={option.id}>
                                {option.title}
                        </option>
                    )}
                </select>
            </div>
        );
    }
}