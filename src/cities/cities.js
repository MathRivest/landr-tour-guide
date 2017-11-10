import _ from 'lodash';
import React, { Component } from 'react';

import './cities.css';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                { name: 'City 1', coordinates: [-0.119970527, 51.52916347] },
                { name: 'City 2', coordinates: [-0.129970527, 51.52916347] },
                { name: 'City 3', coordinates: [-0.139970527, 51.52916347] },
                { name: 'City 4', coordinates: [-0.149970527, 51.52916347] },
                { name: 'City 5', coordinates: [-0.159970527, 51.52916347] },
                { name: 'City 6', coordinates: [-0.169970527, 51.52916347] },
                { name: 'City 7', coordinates: [-0.179970527, 51.52916347] },
                { name: 'City 8', coordinates: [-0.189970527, 51.52916347] },
                { name: 'City 9', coordinates: [-0.199970527, 51.52916347] }
            ]
        };
    }

    handleSelectCity = city => {
        this.setState((prevState, props) => {
            const updatedCities = _.map(this.state.cities, c => {
                if (c.name === city.name) {
                    c['selected'] = !!!c['selected'];
                }
                return c;
            });

            return {
                cities: updatedCities
            };
        });
    };

    handleNextClick = () => {
        const selectedCities = _.filter(this.state.cities, { selected: true });
        this.props.onReady(selectedCities);
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
            return <button onClick={this.handleNextClick}>View your Tour</button>;
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
