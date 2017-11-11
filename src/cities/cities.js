import _ from 'lodash';
import React, { Component } from 'react';
import { mockCities } from './../mockData';
import './cities.css';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: mockCities
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
                        <div>
                            <h4>{city.name}</h4>
                            <div>{city.state}</div>
                            <div className="City-checkbox" />
                        </div>
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
