import React, { Component } from 'react';
import './App.css';

import Cities from './cities/cities';
import MapView from './map-view/map-view';
import { BrowserRouter as Router, Route, PropsRoute } from 'react-router-dom';

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

                <nav className="App-nav">
                    <a href="#">All</a>
                    <a href="#">Mid West</a>
                    <a href="#">West Coast</a>
                    <a href="#">East Coast</a>
                    <a href="#">South East</a>
                </nav>

                <div className="App-body">
                    <Router>
                        <div>
                            <Route exact path="/" component={Cities} onReady={this.handleCitySelection} />
                            <Route path="/tour" render={props => <MapView cities={this.state.selectedCities} />} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
