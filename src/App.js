import React, { Component } from 'react';
import './App.css';

import Cities from './cities/cities';
import MapView from './map-view/map-view';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
                    <div className="App-body">
                        <Route exact path="/" render={props => <Cities onReady={this.handleCitySelection} />} />
                        <Route path="/tour" render={props => <MapView cities={this.state.selectedCities} />} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
