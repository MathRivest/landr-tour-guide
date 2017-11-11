import _ from 'lodash';
import React, { Component } from 'react';
import { mockCities } from './../mockData';
import { mockVenues } from './../mockData';
import './city-detail.css';
import './venues.css';

class City extends Component {
    constructor(props) {
        super(props);
        const cityId = this.props.match.params.cityId;
        this.state = {
            city: _.find(mockCities, { id: cityId })
        };
    }

    renderVenues() {
        return this.state.city.venues.map((venue, i) => {
            const description = venue.description ? <p>{venue.description}</p> : '';
            return (
                <div key={i} className="Venue">
                    <div className="Venue-content">
                        <h4 className="TextHeading--secondary">{venue.name}</h4>
                        {description}
                        <div className="Venue-cta">
                            <button className="Button">Book now</button>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        const { city } = this.state;
        if (!city) {
            return false;
        }
        return (
            <div className="CityDetail">
                <div className="CityDetail-content">
                    <h1 className="TextHeading--secondary">{city.name}</h1>
                    <h3 className="CityDetail-content-subtitle">{city.stateLong}</h3>
                    <p className="CityDetail-content-description">{city.description}</p>
                </div>
                <div className="CityDetail-venues">
                    <div className="Venues">{this.renderVenues()}</div>
                </div>
            </div>
        );
    }
}

export default City;
