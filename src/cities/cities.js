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
            const tileStyles = {
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${city.id}.jpg)`
            };
            return (
                <div key={i} className={'City' + (city.selected ? ' is-selected' : '')} style={tileStyles}>
                    <div className="City-content" onClick={() => this.handleSelectCity(city)}>
                        <h4 className="City-title">{city.name}</h4>
                        <div className="City-infos">{city.state}</div>
                        <div className="City-checkbox" />
                    </div>
                </div>
            );
        });
    }

    renderNextButton() {
        const hasSelectedcity = _.some(this.state.cities, { selected: true });
        if (hasSelectedcity) {
            return <button onClick={this.handleNextClick.bind(this)}>View your Tour</button>;
        }
    }

    render() {
        return (
            <div>
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
