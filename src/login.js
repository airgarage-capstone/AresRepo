

import React, { Component } from 'react';
import logo from './logo.svg';
import aglogo from './logoPic.png';
import axios from 'axios';

import './Form.css';

class login extends React.Component {
    constructor(props) {
        super(props);

        // this.state = { value: 'I will be using AirGarage to...' };

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            dob: "",
            phone: "",
            
            accountType: ""
        
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(event) {
        //alert('Account Not Found');
        event.preventDefault();
        //console.log(this.state);

        const user =
        {
            username: this.state.email,
            password: this.state.password
        };

        axios.post('http://staging.airgara.ge/api/auth/', user).then(response => 
        {
            alert("Login Successful!");

        })

        .catch(error => 
        {
            //alert("Account Not Found");
            var errorResponse = "Account Not Found";

            for(var key in error.response.data) {
                errorResponse += key;
                errorResponse += ': ';
                errorResponse += error.response.data[key];
                errorResponse += '\n';
            }
                alert(errorResponse);
                console.log(error.response.data);
        });
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
       const value = target.value;
        this.setState({ value: target.value });

        this.setState({ [name]: value});
    }

  


    render() {
        return (

            
            <div className="splitForm">
                
                <img src={aglogo} className="logoPic" alt="aglogo" />
                <h1 className="FormTitle">Log In</h1>




               
                <login onSubmit={this.handleSubmit}>

                    <div className="container clearfix">
                  
                        
                        Email
                    <br />
                        <label>
                            <input className="loginMiddle" type="email" name="email" placeholder="easyPark@example.com" 
                            value={this.state.email} onChange={this.handleChange} name="email"/>
                        </label>  <br />  <br />


                        Password
                    <br />
                        <label>
                            <input className="loginMiddle" type="password" name="password" placeholder="********"
                            value={this.state.password} onChange={this.handleChange}  name="password"/>
                        </label> <br />   <br />

                

               

                    <input className="loginButton" type="submit" value="Log In" onChange={this.handleChange}  />
                    <br />   <br />

                 </div>
                </login>
            </div>
        );
    }
}

export default login;