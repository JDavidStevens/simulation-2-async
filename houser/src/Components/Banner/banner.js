import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './banner.css'
import axios from 'axios';



export default class Logout extends Component{

    constructor(){
        super()

        this.logout=this.logout.bind(this)
    }

    logout(){
        axios.post('/api/auth/logout')
        .then(()=> this.props.history.push('/')
            
        )
    }

    render(){
        return(
            <div>
                <button className='logout' onClick={this.logout}>Logout</button>
            
            </div>
        )
    }
}