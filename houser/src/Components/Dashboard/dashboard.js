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

    componentDidMount(){
        axios.get(`/api/properties`)
            .then(response=>{
            this.setState({properties:response.data})
        })
    }
    
    render(){

        let home=this.state.properties.map((element,index)=>{
            return(
                <div className = "home-listings-container" key={index}>
                        
                    <div className="listing-info">
                        <img src={element.img} alt=""/>
                        <h5>{element.propertyname}</h5>
                        <p>{element.propertydescription}</p>
                            <div className="details">
                                <h5>Loan:{element.loanamount}</h5> 
                                <h5>Monthly Mortgage:{element.mortgage}</h5> 
                                <h5>Recommended Rent:{element.recommendedRent}</h5> 
                                <h5>Desired Rent:{element.desiredRent}</h5> 
                                <h5>Address:{element.address}</h5> 
                                <h5>City:{element.city}</h5> 
                                <h5>State:{element.statename}</h5> 
                                <h5>Zip:{element.zip}</h5> 
                            </div>
                        </div>
                    </div>

            )
        })

        return(
            <div>
            <Banner/>
            <div className="page-border">
            <div className="page-content">
                
                    <div className="add-link">
                       <button className="add-new-prop-button"><Link to = '/wizard/1' className="add-new-property">Add new property</Link></button>
                    </div>
                    <div className="filter-container">
                    <p className='dashboard-instructions'>List properties with "desired rent" greater than: $</p>
                    <input className="filter-input" placeholder="0"/>
                    <button className="filter-button">Filter</button>
                    <button className='reset-filter' >Reset</button>
                    </div>
                    <hr className="dashboard-divider" ></hr>
                    <h4 className="home-listings">Home Listings</h4>
                    <div>
                    {home}
                    </div>
                    </div>
                    </div>
                
            </div>
        )
    }
}