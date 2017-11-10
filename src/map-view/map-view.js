import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { ZoomControl } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibWNoYW1iYXVkIiwiYSI6ImNqOXU5M21jeDB0aGkzMnBjZXQybjJnbmUifQ.hk9NZK4ie7Uo42KoUUYuaw'
});


class MapView extends Component {
    cities = [
        { name: 'London', coordinates: [-0.481747846041145, 51.3233379650232] }
    ];

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Map
                style='mapbox://styles/mapbox/light-v9'
                containerStyle={{
                    height: '500px',
                    width: '500px'
                }}>

                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    {this.getFeatures()}
                </Layer>


                <ZoomControl/>
            </Map>
        </div>;
    }

    getFeatures() {
        return this.cities.map(city => {
            return (<Feature coordinates={city.coordinates}/>);
        });
    }
}

export default MapView;
