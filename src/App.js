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
                <header className="App-header">
                    <h1>Pick your tour</h1>
                </header>

                <div className="App-body">
                    <Router>
                        <div>
                            <Route exact path="/" render={props => <Cities onReady={this.handleCitySelection} />} />
                            <Route path="/tour" render={props => <MapView cities={this.state.selectedCities} />} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
