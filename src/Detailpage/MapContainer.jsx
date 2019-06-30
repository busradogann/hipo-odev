import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

import "./_map-container.scss";

export class MapContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        const { google } = this.props ;
        const { activeMarker,
                showingInfoWindow,
                selectedPlace
        } = this.state;

        return(
            <Map google={google}
                 zoom={14}
                 className={"map-style"}
                 initialCenter={{ lat: 47.444, lng: -122.176}}>
                <Marker onClick={this.onMarkerClick}
                        name={""} />
                <InfoWindow marker={activeMarker}
                            visible={showingInfoWindow}
                            onClose={this.onClose}>
                    <div>
                        <h4>{selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDk6hH_iw4bclCO2pVW8F7oB9TTxPJIGzk'
})(MapContainer);