import _ from 'lodash';
import React, { Component } from 'react';
import { mockCities } from './../mockData';
import './cities.css';
import { withRouter } from 'react-router-dom';

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: _.orderBy(mockCities, [city => city.id], ['asc'])
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

        this.props.history.push(`/tour`);
    };

    renderCities() {
        return this.state.cities.map((city, i) => {
            const tileContentStyles = {
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${city.id}.jpeg)`
            };
            return (
                <div key={i} className={'City' + (city.selected ? ' is-selected' : '')}>
                    <div className="City-content" onClick={() => this.handleSelectCity(city)} style={tileContentStyles}>
                        <div className="City-background">
                            <img src={`${process.env.PUBLIC_URL}/images/${city.id}.jpeg`} alt={city.name} />
                        </div>
                        <div className="City-content-body">
                            <h4 className="City-title">{city.name}</h4>
                            <div className="City-infos">{city.state}</div>
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
            return (
                <div className="CitiesNextBanner">
                    <a onClick={this.handleNextClick.bind(this)}>View your route</a>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="App-header">
                    <h1 className="TextHeading--secondary">Life is a highway</h1>
                    <h3>Book your tour</h3>
                </div>
                <nav className="App-nav">
                    <a href="">All</a>
                    <a href="">Mid West</a>
                    <a href="">West Coast</a>
                    <a href="">East Coast</a>
                    <a href="">South East</a>
                </nav>
                <div className="Cities">{this.renderCities()}</div>
                {this.renderNextButton()}
            </div>
        );
    }
}

export default withRouter(Cities);
