import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

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

          
                {this.state.spots.map(spot => <Card


                    spotName={spot.name}
                    spotPrice={spot.price}
                    spotAddress={spot.address.address_line1}
                    spotCity={spot.address.city}
                    spotState={spot.address.state}
                    spotZipcode={spot.address.zipcode}
                    spotQuantity={spot.quantity}
                    spotAvailable={spot.available_24_7} />)}

           
            </div>
     
        );
    }
}

export default App;