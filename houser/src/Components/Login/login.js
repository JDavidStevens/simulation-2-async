import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import './login.css';
import axios from 'axios';
import {login,register} from "../../ducks/reducer";
import Banner from '../Banner/banner';


class Login extends Component{
    constructor(){
        super()

        this.state={
            username: '',
            password:''
        }

        this.login=this.login.bind(this);
        this.register=this.register.bind(this);
        
        this.handleChange=this.handleChange.bind(this);
    }

    login(){
        const {login,history}=this.props;
        const {username,password}=this.state;
        login({username,password},history);
    }

    register(){
        const {register,history}=this.props;
        const {username,password}=this.state;
        register({username,password},history);
    }

    handleChange(prop, val){
        this.setState({[prop]:val})
    }

    render(){
        return(
            <div>
            <Banner/>
            <div>
                <div>
                    <h3>Username</h3>
                    <input className="login-input" type="text" onChange={e=>this.handleChange('username',e.target.value)}/>
                    <h3>Password</h3>
                    <input className="login-input" type="text" onChange={e=>this.handleChange('password',e.target.value)}/>
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

export default connect(state=>state,{login,register})(Login);