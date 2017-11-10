import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibWNoYW1iYXVkIiwiYSI6ImNqOXU5M21jeDB0aGkzMnBjZXQybjJnbmUifQ.hk9NZK4ie7Uo42KoUUYuaw'
});


class MapView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Map
                style='mapbox://styles/mapbox/light-v9'
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}>
                <Layer
                    type='symbol'
                    id='marker'
                    layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
                </Layer>
            </Map>
        </div>;
    }
}

export default MapView;
