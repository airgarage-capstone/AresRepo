import React, { Component } from 'react';
import './Card.css';
import aglogo from './logoPic.png';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spotName: '',
            spotPrice: '',
            spotAddress : '',
            spotQuantity: '',
            spotAvailable: '',
            spotPic: require('./logoPic.png')
        }
    }


    render() {
        return (
            <div className='Form'>

                <div className='cardSplit'>
                    <img src={this.state.spotPic} className="logoPic" alt="aglogo" />/>
                    <div>
                          <td>{this.state.spotName = 'Ares Parking Spot'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Price Per Month: </th>
                        <td>{this.state.spotPrice = '$10000'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Location Address: </th>
                        <td>{this.state.spotAddress = '1800 E Waffle dr'}</td>
                        <br />  
                    </div>

                    <div>
                        <th>Spots Available: </th>
                        <td>{this.state.spotQuantity = '9'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Availiable 24/7: </th>
                        <td>{this.state.spotAvailable = '7:00am - 7:00pm'}</td>
                        <br />   
                    </div>
                  
                </div>

                <div className='cardSplit'>
                    <img src={this.state.spotPic} className="logoPic" alt="aglogo" />/>
                    <div>
                         <td>{this.state.spotName = 'Billy Joe Parking Spot'}</td>
                        <br />  
                    </div>

                    <div>
                        <th>Price Per Month: </th>
                        <td>{this.state.spotPrice = '$99'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Location Address: </th>
                        <td>{this.state.spotAddress = '1111 N Bob dr'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Spots Available: </th>
                        <td>{this.state.spotQuantity = '1'}</td>
                        <br />  
                    </div>

                    <div>
                        <th>Availiable 24/7: </th>
                        <td>{this.state.spotAvailable = 'Yes'}</td>
                        <br />   
                    </div>

                </div>

                <div className='cardSplit'>
                    <img src={this.state.spotPic} className="logoPic" alt="aglogo" />/>
                    <div>
                        
                        <td>{this.state.spotName = 'Santa Claus Parking Spot'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Price Per Month: </th>
                        <td>{this.state.spotPrice = '$0.99'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Location Address: </th>
                        <td>{this.state.spotAddress = '1 N Pole dr'}</td>
                        <br />  
                    </div>

                    <div>
                        <th>Spots Available: </th>
                        <td>{this.state.spotQuantity = '9999'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Availiable 24/7: </th>
                        <td>{this.state.spotAvailable = 'Yes'}</td>
                        <br />   
                    </div>

                </div>
                <div className='cardSplit'>
                    <img src={this.state.spotPic} className="logoPic" alt="aglogo" />/>
                    <div>
                      
                        <td>{this.state.spotName = 'Kobe Bryant Parking Spot'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Price Per Month: </th>
                        <td>{this.state.spotPrice = '$150'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Location Address: </th>
                        <td>{this.state.spotAddress = '24 E Goat dr'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Spots Available: </th>
                        <td>{this.state.spotQuantity = '4'}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Availiable 24/7: </th>
                        <td>{this.state.spotAvailable = 'No'}</td>
                        <br />  
                    </div>

                </div>
            </div>

        );
    }
}

export default Card;