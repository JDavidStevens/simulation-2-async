import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {connect} from "react-redux";
import './login.css';
import axios from 'axios';
// import {login,register} from "../../ducks/reducer";
import Banner from '../Banner/banner';


class Login extends Component{
    constructor(){
        super()

        this.state={
            user:{},
            username: '',
            password:''
        }

        this.login=this.login.bind(this);
        this.register=this.register.bind(this);
    }

 
    login(){
        const {username,password}=this.state;
        axios.post(`/api/auth/login`,{username:username,password:password})
        .then(response=>{
            this.props.history.push('/dashboard')
        })
    }

    register(){
        
        const {username,password}=this.state;
        axios.post(`/api/auth/register`,{username,password})
        .then(response=>{
            this.props.history.push('/dashboard')
        })
    }

    handleUsername(value){
        this.setState({username:value})
        }

    handlePassword(value){
        this.setState({password:value})
    }
    

    render(){
        return(
            <div>
            <Banner/>
            <div>
                <div>
                    <h3>Username</h3>
                    <input className="login-input" type="text" onChange={e=>this.handleUsername(e.target.value)}/>
                    <h3>Password</h3>
                    <input className="login-input" type="text" onChange={e=>this.handlePassword(e.target.value)}/>
                </div>
                <div>
                    <button className="login-button" onClick={this.login}>Login</button>
                    <button className="login-button" onClick={this.register}>Register</button>
                </div>
            </div>

            </div>
        )
    }
}

export default Login;