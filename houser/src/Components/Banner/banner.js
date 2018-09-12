import React, {Component} from 'react';
import './banner.css'
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import headerLogo from '../../assets/header_logo.png';





class Banner extends Component{

    constructor(){
        super()

        this.logout=this.logout.bind(this)
    }

    logout(){
        axios.post('/api/auth/logout')
        // console.log("history1:",this.props);
        .then(()=> this.props.history.push('/')
        )
        // console.log("history2:",this.props);
    }

    render(){
        if(this.props.location.pathName!==('/')){
        return(
            <div className='banner-container'>
            <div className="logo-title-container">
            <img src={headerLogo} alt="" className="header-logo"/>
            <h2 className="houser">Houser</h2>
            <h2 className="banner-dashboard">Dashboard</h2>
            </div>
                <a className='logout' onClick={this.logout}>Logout</a>
            
            </div>
        )
        }
    }
}

export default withRouter(Banner)