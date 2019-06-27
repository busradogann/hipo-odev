import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./_search-button.scss";

export default class SearchButton extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.query !== nextProps.query || this.props.selectedOption !== nextProps.selectedOption;
    }
    render() {
        const { query, selectedOption } = this.props;
        let url = `/image-list?query=${query}`;
        if (selectedOption) {
            url = `${url}&collectionID=${selectedOption}`;
        }
        return (
            <Link to={url}
                  className={"search-button-context"}>
                SEARCH
            </Link>
        )
    }
}