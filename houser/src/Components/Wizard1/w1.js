import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './w1.css'
import axios from 'axios';
import Banner from '../Banner/banner';


export default class Wizard1 extends Component{
    render(){
        return(
            <div>
            <Banner/>
            </div>
        )
    }
}