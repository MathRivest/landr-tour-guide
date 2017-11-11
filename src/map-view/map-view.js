import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup, ZoomControl } from 'react-mapbox-gl';
import { withRouter } from 'react-router-dom';

import './map.css';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibWNoYW1iYXVkIiwiYSI6ImNqOXU5M21jeDB0aGkzMnBjZXQybjJnbmUifQ.hk9NZK4ie7Uo42KoUUYuaw'
});

class MapView extends Component {
    constructor(props) {
        super(props);

        let center = [-104.990251, 39.7392358];
        if (!this.props.cities || this.props.cities.length === 0) {
            // this.props.history.push('/');
        } else {
            center = this.props.cities[0].coordinates;
        }

        this.state = {
            selectedCity: undefined,
            fitBounds: undefined,
            center,
            zoom: [7]
        };
    }

    render() {
        const { fitBounds, center, zoom, selectedCity } = this.state;

        return (
            <div className="Map">
                <Map
                    style="mapbox://styles/mrivest/cj9uo7m9a42my2smpbvv5euns"
                    fitBounds={fitBounds}
                    center={center}
                    zoom={zoom}
                    onDrag={this.onDrag}
                    containerStyle={{
                        height: '500px',
                        width: '100%'
                    }}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        {this.getFeatures(this.props.cities)}
                    </Layer>

                    {selectedCity && (
                        <Popup offset={[0, -50]} coordinates={selectedCity.coordinates}>
                            {selectedCity.name}
                        </Popup>
                    )}

                    <ZoomControl />
                </Map>
            </div>
        );
    }

    onDrag = () => {
        if (this.state.selectedCity) {
            this.setState({ selectedCity: undefined });
        }
    };

    getFeatures(cities) {
        return cities.map((city, i) => {
            return (
                <Feature
                    key={i}
                    properties={city}
                    coordinates={city.coordinates}
                    onClick={this.onClick.bind(this, city)}
                    onMouseEnter={this.onToggleHover.bind(this, 'pointer')}
                    onMouseLeave={this.onToggleHover.bind(this, '')}
                />
            );
        });
    }

    onClick(city) {
        this.setState({
            center: city.coordinates,
            zoom: [14],
            selectedCity: city
        });
    }

    onToggleHover(cursor, { map }) {
        map.getCanvas().style.cursor = cursor;
    }
}

export default withRouter(MapView);
