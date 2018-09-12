import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './dashboard.css'
import axios from 'axios';
import Banner from '../Banner/banner';



export default class Dashboard extends Component{

    constructor(){
        super()

        this.state={
            properties:[]
        }
    }

    // componentDidMount(){

    //     axios.get(`/api/properties/`)
        
    //     .then(response=>{
    //         this.setState({properties:response.data})
    //     })
    // }
    
    render(){

        let home=this.state.properties.map((element,index)=>{
            return(
                <div className = "home-listings-container">
                        <h4>Home Listings</h4>
                    <div className="listing-info">
                        <img src={element.img} alt=""/>
                        <h5>{element.propertyName}</h5>
                        <p>{element.propertyDescription}</p>
                            <div className="details">
                                <h5>Loan:{element.loanAmount}</h5> 
                                <h5>Monthly Mortgage:{element.mortgage}</h5> 
                                <h5>Recommended Rent:{element.recommendedRent}</h5> 
                                <h5>Desired Rent:{element.desiredRent}</h5> 
                                <h5>Address:{element.address}</h5> 
                                <h5>City:{element.city}</h5> 
                                <h5>State:{element.state}</h5> 
                                <h5>Zip:{element.zip}</h5> 
                            </div>
                        </div>
                    </div>

            )
        })

        return(
            <div>
            <Banner/>
                <body>
                    <div className="add-link">
                        <Link to = '/wizard/1' className="add-new-property">Add new property</Link>
                    </div>
                    <div>
                    {home}
                    </div>
                </body>
            </div>
        )
    }
}