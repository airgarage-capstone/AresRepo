import React, { Component } from 'react';
import logo from './logo.svg';
import aglogo from './logoPic.png';
import './Form.css';
import axios from 'axios';


class Form extends React.Component {

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
        
            accountType: "",
            entityType: ""
           
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
      
    }

    handleSubmit(event) {
        alert('AirGarage getting READY for ' + this.state.firstName);
        event.preventDefault();
        //console.log(this.state);

        

        const user = 
        {   
            first_name : this.state.firstName,
            last_name: this.state.lastName,
            username: this.state.email,
            password: this.state.password,
            accountType: this.state.accountType, 
            dob: this.state.dob,
             phone: this.state.phone, 
             entityType: this.state.entityType

        };

        

        axios.post('http://staging.airgara.ge/api/register/', user).then(response => 
        {
            alert("Sign-up Completed for" + this.state.firstName);
        })
        
            //alert('AirGarage READY' + this.state.firstName);
        

    .catch(error => 
        {
            //alert('Sign-up Failed');
            var errorResponse = "Sign-up Failed";

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

    handleInputChange(event) {
        console.log("handle Change");
        const target = event.target;
        const value = target.value;
        const name = target.name;
      
        //this.setState({ value: target.value });

        this.setState({ [name]: value});
    } 


    render() {
        return (

            
            <div className="splitForm">

                <img src={aglogo} className="logoPic" alt="aglogo" />
                <h1 className="FormTitle">Sign Up</h1>


                <form onSubmit={this.handleSubmit}>

                    <div className="container clearfix">
                   


                     First Name
                    <br />
                    <label>
                            <input className="middle" type="text" name="firstName" 
                                value={this.state.firstName} onChange={this.handleInputChange}  />
                            
                    </label><br /> <br />
                  
                      
                     Last Name 
                    <br />
                    <label>
                            <input className="middle" type="text" name="lastName"
                             value={this.state.lastName} onChange={this.handleInputChange}  />
                    </label> <br />   <br />


                    Email 
                    <br />
                    <label>
                            <input className="middle" type="email" name="email" placeholder="easyPark@example.com" 
                             value={this.state.email} onChange={this.handleInputChange} />
                    </label>  <br />  <br /> 


                     Password
                    <br />
                    <label>
                            <input className="middle" type="password" name="password" placeholder="********" 
                             value={this.state.password} onChange={this.handleInputChange} />
                    </label> <br />   <br />

                     Phone Number 
                        <br />
                    <label>
                            <input className="middle" type="number" placeholder="(xxx) xxx-xxxx" name="phone"
                             value={this.state.phone} onChange={this.handleInputChange} />
                    </label>  <br />  <br />
                   

                    Date of Birth
                        <br />
                    <label>
                            <input className="middle" type="date" required pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" placeholder="mm/dd/yyyy" name="dob"
                             value={this.state.dob} onChange={this.handleInputChange} />
                    </label> <br />   <br />


                    Profile Account Type
                        <br />
                    <label>
                            <select className="middle" name="accountType" onChange={this.handleInputChange}>
                            <option value="" selected disabled>Choose option</option>
                            <option value="Find parking">Find Parking</option>
                            <option  value="List a spot">List a Spot</option>
                            <option  value="Both">Both</option>
                        </select>
                    </label> <br />  <br />
                   

              

                    <input type="checkbox" name="terms" /> 
                    <label>
                         Agree to terms and conditions
                    </label> <br />   <br />
                   

                    <input className="button" type="submit" value="Sign Up" onChange={this.handleInputChange}  />
                    <br />   <br />

                </div>
                </form>
           
        

                
            </div>
        );
    }
}

export default Form;