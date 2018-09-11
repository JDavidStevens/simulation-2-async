import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateDesiredRent} from '../../ducks/reducer';
import Banner from '../Banner/banner';
// import axios from 'axios';
import './w5.css'
import checked from '../../assets/step_completed.png';
import active from '../../assets/step_active.png';



class Wizard5 extends Component{
    // constructor(){
    //     super()

    //     this.submit=this.submit.bind(this)
    // }

    // submit(propertyName,propertyDescription,address,city,stateName,zip,img,loanAmount,mortgage){
    //     axios.post('/api/properties',{})
    // }

    render(){
        const {updateDesiredRent} = this.props;

        return(
        <div>
           <Banner/>
            <div className="tracker">
                    <h3>Add new listing</h3>
                    <Link to= '/dashboard' className="cancel">Cancel</Link>
                    <h5>Step 5</h5>
                    <div className="circles">
                        <img src={checked} alt="checked-circle"/>
                        <img src={checked} alt="checked-circle"/>
                        <img src={checked} alt="checked-circle"/>
                        <img src={checked} alt="checked-circle"/>
                        <img src={active} alt="inactive-circle"/>
                    </div>
            </div>
            <div className="recommend">
                <h5>Recommended Rent</h5>
            </div>
            <div className="input-container-5">
            <h4>Desired Rent</h4>
            <input className="desired-rent-input" onChange={e=>(updateDesiredRent(e.target.value))}/>
            </div>
            <Link to = '/wizard/4' className="next-step-w5">Previous Step</Link>
            <Link to = '/dashboard'> <button className="complete" onClick={()=>this.submit(this.state.propertyName,this.state.propertyDescription,this.state.address,this.state.city,this.state.stateName,this.state.zip,this.state.img,this.state.loanAmount,this.state.mortgage)}>Complete</button></Link>
        </div>
        )
    }
}

function mapStateToProps(state){
    const {desiredRent}=state;

    return{
        desiredRent
    }

}

export default connect(mapStateToProps, {updateDesiredRent})(Wizard5);