import React, { Component } from 'react';
import logo from './logo.svg';
import './Form.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'I will be using AirGarage to...' };

        this.handleChange = this.handleChange.bind(this);
      
    }

    

    handleChange(event) {
        this.setState({ value: event.target.value });
    } 

    render() {
        return (

            
            <div className="Form">
                <h1 className="FormTitle">Sign Up</h1>
                <form>
                    <label>
                       First Name:
                         <input type="text" name="first name" />
                    </label>

                    <label>
                        Last Name:
                         <input type="text" name="last name" />
                    </label>

                    <label>
                        Email:
                         <input type="text" name="email" />
                    </label>

                    <label>
                       Password:
                         <input type="text" name="password" />
                    </label>

                    <label>
                        Date of Birth:
                         <input type="text" placeholder="mm/dd/yyyy" />
                    </label>

                    <label>
                        Phone Number:
                         <input type="text" placeholder="(xxx)xxx-xxxx"  />
                    </label>

                    <label>
                        Profile Account Type:
          <select value={this.state.value} onChange={this.handleChange}>
                            <option value="findParking">Find Parking</option>
                            <option value="listaSpot">List a Spot</option>
                            <option value="both">Both</option>
                          
                        </select>



                    </label>

                  

                    <input type="checkbox" name="terms" /> 
                    <label>
                    Agree to terms and conditions
                        </label>
                

                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        );
    }
}

export default Form;