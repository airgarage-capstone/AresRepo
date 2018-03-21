import React, { Component } from 'react';
import logo from './logo.svg';
import aglogo from './logoPic.png';
import './Form.css';


class Form extends React.Component {

    constructor(props) {
        super(props);

        // this.state = { value: 'I will be using AirGarage to...' };

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            dob: '',
            phone: '',
            profile: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      
    }

    handleSubmit(event) {
        alert('AirGarage READY' + this.state.firstName);
        event.preventDefault();
        console.log(this.state);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    } 


    render() {
        return (

            
            <div className="splitForm">

                <img src={aglogo} className="logoPic" alt="aglogo" />
                <h1 className="FormTitle">Sign Up</h1>

              
               
               
          
                <form onSubmit={this.handleSubmit}>

                    <div className="container clearfix">
                    <p className="align">


                     First Name
                    <br />
                    <label>
                            <input className="middle" type="text" name="first name"  />
                            
                    </label><br /> <br />
                  
                      
                     Last Name 
                    <br />
                    <label>
                            <input className="middle" type="text" name="last name" />
                    </label> <br />   <br />


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

                     Phone Number 
                        <br />
                    <label>
                            <input className="middle" type="text" placeholder="(xxx) xxx-xxxx"/>
                    </label>  <br />  <br />
                   

                    Date of Birth
                        <br />
                    <label>
                            <input className="middle" type="date" required pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" placeholder="mm/dd/yyyy" />
                    </label> <br />   <br />


                    Profile Account Type
                        <br />
                    <label>
                            <select className="middle" value={this.state.value} onChange={this.handleChange}>
                            <option value="findParking">Find Parking</option>
                            <option value="listaSpot">List a Spot</option>
                            <option value="both">Both</option>
                        </select>
                    </label> <br />  
                   

                    </p>

                    <input className="middle" type="checkbox" name="terms" /> 
                    <label>
                         Agree to terms and conditions
                    </label> <br />   <br />
                   

                    <input className="middle" type="submit" value="Sign Up"  />
                    <br />   <br />

                </div>
                </form>
           
        

                
            </div>
        );
    }
}

export default Form;