import React, {Component} from 'react';
import './banner.css'
import axios from 'axios';
import {withRouter} from 'react-router-dom';





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
            <div>
                <button className='logout' onClick={this.logout}>Logout</button>
            
            </div>
        )
        }
    }
}

export default withRouter(Banner)