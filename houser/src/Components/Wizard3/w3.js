import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './w3.css'
import axios from 'axios';
import Banner from '../Banner/banner';


export default class Wizard3 extends Component{
    render(){
        return(
            <div>
            <Banner/>
            </div>
        )
    }
}