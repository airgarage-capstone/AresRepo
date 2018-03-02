

import React, { Component } from 'react';
import logo from './logo.svg';
import aglogo from './logoPic.png';
import './Form.css';
import './login.css';

class login extends React.Component {
    constructor(props) {
        super(props);

        // this.state = { value: 'I will be using AirGarage to...' };

        this.state = {
          
            email: '',
            password: '',
           
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(event) {
        alert('Account Not Found');
        event.preventDefault();
        console.log(this.state);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (

            
            <div className="Form">
                
                <img src={aglogo} className="logoPic" alt="aglogo" />
                <h1 className="FormTitle">Log In</h1>





                <form onSubmit={this.handleSubmit}>
                    <p className="align">
                        
                        Email
                    <br />
                        <label>
                            <input className="middle" type="email" name="email" placeholder="easyPark@example.com" />
                        </label>  <br />  <br />


                        Password
                    <br />
                        <label>
                            <input className="middle" type="password" name="password" placeholder="********" />
                        </label> <br />   <br />

                    </p>

               

                    <input className="middle" type="submit" value="Log In" />
                    <br />   <br />

                </form>
            </div>
        );
    }
}

export default login;