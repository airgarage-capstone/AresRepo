import React, { Component } from 'react';
import './Card.css';
import aglogo from './logoPic.png';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spotName: props.spotName,
            spotPrice: props.spotPrice,
            spotAddress: props.spotAddress,
            spotCity: props.city,
            spotState: props.state,
            spotZipcode: props.spotZipcode,
            spotQuantity: props.spotQuantity,
            spotAvailable: props.spotAvailable,
            spotPic: require('./logoPic.png')
        }
    }


    render() {
        return (
            <div>

                <div className='cardSplit'>
                    <img src={this.state.spotPic} className="logoPic" alt="aglogo" />/>
                    <div>
                          <td>{this.props.spotName}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Price Per Month: </th>
                        <td>{this.props.spotPrice}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Location Address: </th>
                        <td>{this.props.spotAddress}</td>
                        <br />  
                    </div>

                    <div>
                        <th>City: </th>
                        <td>{this.props.spotCity}</td>
                        <br />
                    </div>

                    <div>
                        <th>State: </th>
                        <td>{this.props.spotState}</td>
                        <br />
                    </div>

                    <div>
                        <th>ZipCode: </th>
                        <td>{this.props.spotZipcode}</td>
                        <br />
                    </div>

                    <div>
                        <th>Spots Available: </th>
                        <td>{this.props.spotQuantity}</td>
                        <br />   
                    </div>

                    <div>
                        <th>Availiable 24/7: </th>
                        <td>{this.props.spotAvailable ? "Available 24/7" : "Not Available 24/7"}</td>
                        <br />   
                    </div>
                  
                </div>
                <br /> 
                

            </div>

        );
    }
}

export default Card;