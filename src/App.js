import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import login from './login';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 classname = "App-title">AirGarage</h1>
                <Form></Form>
                
                <login></login>
            </div>
           
                
          
        );
    }
}

export default App;