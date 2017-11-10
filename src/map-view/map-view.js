import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup, ZoomControl } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibWNoYW1iYXVkIiwiYSI6ImNqOXU5M21jeDB0aGkzMnBjZXQybjJnbmUifQ.hk9NZK4ie7Uo42KoUUYuaw'
});


class MapView extends Component {
    cities = [
        { name: 'London', coordinates: [-0.481747846041145, 51.3233379650232] }
    ];

    constructor(props) {
        super(props);

        this.state = {
            cities: this.cities,
            selectedCity: undefined,
            fitBounds: undefined,
            center: [-0.109970527, 51.52916347],
            zoom: [11],
        };
    }

    render() {
        const { fitBounds, center, zoom, cities, selectedCity } = this.state;

        return <div>
            <Map
                style='mapbox://styles/mapbox/light-v9'
                fitBounds={fitBounds}
                center={center}
                zoom={zoom}
                onDrag={this.onDrag}
                containerStyle={{
                    height: '500px',
                    width: '500px'
                }}
            >

                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>

                    {this.getFeatures(cities)}

                </Layer>

                {
                    selectedCity && (
                        <Popup
                            offset={[0, -50]}
                            coordinates={selectedCity.coordinates}
                        >
                            {selectedCity.name}
                        </Popup>
                    )
                }


                <ZoomControl/>
            </Map>
        </div>;
    }

    onDrag = () => {
        if (this.state.selectedCity) {
            this.setState({ selectedCity: undefined });
        }
    };

    getFeatures(cities) {
        return cities.map(city => {
            return (<Feature
                properties={city}
                coordinates={city.coordinates}
                onClick={this.onClick.bind(this, city)}
                onMouseEnter={this.onToggleHover.bind(this, 'pointer')}
                onMouseLeave={this.onToggleHover.bind(this, '')}
            />);
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

export default MapView;