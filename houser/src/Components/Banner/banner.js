import React, {Component} from 'react';
import './banner.css'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Login from '../Login/login';




class Banner extends Component{

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
        if(this.props.location.pathName!==('/')){
        return(
            <div>
                <button className='logout' onClick={this.logout}>Logout</button>
            
            </div>
        )
        }
    }
}

export default withRouter(Banner)