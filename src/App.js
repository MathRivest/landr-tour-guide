import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import Cities from './cities/cities';
import MapView from './map-view/map-view';
import City from './city/city';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCities: []
        };
    }

    handleCitySelection = cities => {
        this.setState({
            selectedCities: cities
        });
    };

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Link to="/">
                            <img className="App-logo" src={logo} alt="RoadRunner" />
                        </Link>
                        <div className="App-body">
                            <Route exact path="/" render={props => <Cities onReady={this.handleCitySelection} />} />
                            <Route path="/tour" render={props => <MapView cities={this.state.selectedCities} />} />
                            <Route path="/cities/:cityId" component={City} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
