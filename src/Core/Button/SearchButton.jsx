import React, { Component } from 'react';
import './_search-button.scss';

import { Link } from 'react-router-dom';



export default class SearchButton extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.query !== nextProps.query || this.props.selectedOption !== nextProps.selectedOption;
    }

    render() {

        let url = `/image-list?query=${this.props.query}`;
        if (this.props.selectedOption !== null) {
            url = `${url}&collectionID=${this.props.selectedOption}`;
        }

        return (
            <Link to={url} className={"search-button-context"}>
                SEARCH
            </Link>
        )
    }
}