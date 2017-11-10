import _ from 'lodash';
import React, { Component } from 'react';

import './cities.css';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                { id: 1, name: 'City 1' },
                { id: 2, name: 'City 2' },
                { id: 3, name: 'City 3' },
                { id: 4, name: 'City 4' },
                { id: 5, name: 'City 5' },
                { id: 6, name: 'City 6' },
                { id: 7, name: 'City 7' },
                { id: 8, name: 'City 8' },
                { id: 9, name: 'City 9' }
            ]
        };
    }

    handleSelectCity = city => {
        this.setState((prevState, props) => {
            const updatedCities = _.map(this.state.cities, c => {
                if (c.id === city.id) {
                    c['selected'] = !!!c['selected'];
                }
                return c;
            });

            return {
                cities: updatedCities
            };
        });
    };

    renderCities() {
        return this.state.cities.map((city, i) => {
            return (
                <div key={i} className={'City' + (city.selected ? ' is-selected' : '')}>
                    <div className="City-content" onClick={() => this.handleSelectCity(city)}>
                        <h4>{city.name}</h4>
                    </div>
                </div>
            );
        });
    }

    renderNextButton() {
        const hasSelectedcity = _.some(this.state.cities, { selected: true });
        if (hasSelectedcity) {
            return <button>View your Tour</button>;
        }
    }

    render() {
        return (
            <div>
                <div className="Cities">{this.renderCities()}</div>
                {this.renderNextButton()}
            </div>
        );
    }
}

export default Cities;
