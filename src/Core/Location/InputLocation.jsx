import React, { Component } from "react";
import "./_input-location.scss";

export default class InputLocation extends Component {
    handleQueryUpdate = (event) => {
        this.props.onChange(event.target.value)
    }
    render() {
        const { value } = this.props;
        return (
            <input
                className={"input-location"}
                type="text"
                value={value}
                placeholder="Query"
                onChange={this.handleQueryUpdate}
            />
        );
    }
}