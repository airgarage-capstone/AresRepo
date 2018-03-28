import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Login from './login';
import Card from './Card';
import axios from 'axios';


class App extends Component {

   
    state = {spots: []}
    componentDidMount()
    {
        axios.get(`https://airgara.ge/api/spots/`)
            .then(res => {
                const spots = res.data;
                this.setState({ spots });
            })
    }

    render() {
        return (
            <div className="App">
                <h1 classname="App-title">AirGarage</h1>

                <div>
                {this.state.spots.map(spot => <Card

     
                    spotName={spot.Spotname}
                    spotPrice={spot.spotPrice}
                    spotAddress={spot.spotAddress}
                    spotQuantity={spot.spotQuantity}
                    spotAvailable={spot.spotAvailiable}   />)}
             
            </div> 
            </div>
     
        );
    }
}

export default App;