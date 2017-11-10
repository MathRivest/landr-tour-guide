import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cities from './cities/cities';
import MapView from './map-view/map-view';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>

                <div className="App-body">
                    <Cities />

                    <MapView />
                </div>
            </div>
        );
    }
}

export default App;
