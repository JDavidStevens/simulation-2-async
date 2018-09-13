import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateDesiredRent} from '../../ducks/reducer';
import Banner from '../Banner/banner';
import axios from 'axios';
import './w5.css'
import checked from '../../assets/step_completed.png';
import active from '../../assets/step_active.png';



class Wizard5 extends Component{
    constructor(){
        super()

        this.submit=this.submit.bind(this)
    }

    submit(){
        let{propertyName,propertyDescription,address,city,stateName,zip,img,loanAmount,mortgage,desiredrent}=this.props.state;
        // this info is passed as props from the reducer on an object named state.
        
        axios.post(`/api/properties`,{

            // do not add an id after '/api/properties this come from sessions which can only be found on the back-end!!!
            propertyName,propertyDescription,address,city,stateName,zip,img,loanAmount,mortgage,desiredrent
        }).then(()=>this.props.history.push('/dashboard'))
        .catch(err=>{console.log("submit axios request")})
        
    }

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
            <button className="complete" onClick={this.submit}>Complete</button>
        </div>
        )
    }
}

function mapStateToProps(state){
    const {desiredRent}=state;

    return{
        desiredRent,
        state
    }

}
// since we are returning all of state, we do not need to specifically name updateDesiredRent as a mapStateToProps parameter or in the return statement
export default connect(mapStateToProps, {updateDesiredRent})(Wizard5);