import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './dashboard.css'
import axios from 'axios';
import '../Banner/banner';
import Banner from '../Banner/banner';


export default class Dashboard extends Component{
    constructor(){
        super()

        this.state={
            desiredRent:''
        }
    }

    // componentDidMount(){
    //     axios.get(`/api/properties/${session.user.username}`)
    // }

    render(){
        return(
            <div>
                <Banner/>
                <body>
                    <div className="add-link">
                        <Link to = '/wizard/1' className="add-new-property">Add new property</Link>
                    </div>
                    <div className = "home-listings-container">

                    </div>
                </body>
            </div>
        )
    }
}