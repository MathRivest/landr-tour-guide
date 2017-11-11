import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Marker, ZoomControl } from 'react-mapbox-gl';
import { withRouter } from 'react-router-dom';

import './map-view.css';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibWNoYW1iYXVkIiwiYSI6ImNqOXU5M21jeDB0aGkzMnBjZXQybjJnbmUifQ.hk9NZK4ie7Uo42KoUUYuaw'
});

class MapView extends Component {
    constructor(props) {
        super(props);

        let center = [-104.990251, 39.7392358];
        let zoom = [6];
        if (!this.props.cities || this.props.cities.length === 0) {
            // this.props.history.push('/');
        } else {
            center = this.props.cities[0].coordinates;
            zoom = [7];
        }

        this.state = {
            selectedCity: undefined,
            fitBounds: undefined,
            center,
            zoom
        };

        window.scrollTo(0, 0);
    }

    renderCities() {
        return this.props.cities.map((city, i) => {
            return (
                <div className="MapView-cities-item">
                    <h3 className="MapView-cities-item-title TextHeading--secondary"
                        onMouseEnter={this.onMouseEnter.bind(this, city)}
                        onMouseLeave={this.onMouseLeave.bind(this, city)}>{city.name}</h3>
                    <div className="MapView-cities-item-venueCta">
                        <a href={city.id}>Choose your venue</a>
                    </div>
                    <a className="MapView-cities-item-dateCta">DD/MM/YYYY</a>
                </div>
            );
        });
    }

    onMouseEnter(city, { map }) {
        debugger
    }

    onMouseLeave(city, { map }) {
        debugger;
    }

    render() {
        const { fitBounds, center, zoom, selectedCity } = this.state;

        return (
            <div className="MapView">
                <div className="MapView-cities">{this.renderCities()}</div>
                <Map
                    style="mapbox://styles/mrivest/cj9usby5a46jv2ro3gx7gcz37"
                    fitBounds={fitBounds}
                    center={center}
                    zoom={zoom}
                    onDrag={this.onDrag}
                    containerStyle={{
                        height: '100vh'
                    }}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        {this.getFeatures(this.props.cities)}
                    </Layer>

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
                <Marker
                    key={i}
                    properties={city}
                    coordinates={city.coordinates}
                    onMouseEnter={this.onMouseEnter.bind(this, city)}
                    onMouseLeave={this.onMouseLeave.bind(this, city)}
                >
                    <img src=''/>
                </Marker>
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
