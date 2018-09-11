import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updatePropertyName, updatePropertyDescription} from '../../ducks/reducer';
import './w1.css'

import Banner from '../Banner/banner';
import active from '../../assets/step_active.png';
import inactive from '../../assets/step_inactive.png';



class Wizard1 extends Component{
    render(){
        const {updatePropertyName, updatePropertyDescription}=this.props;
        return(
    <div>
            <Banner/>
        <div className="tracker">
            <h3>Add new listing</h3>
            <Link to= '/dashboard' className="cancel">Cancel</Link>
            <h5>Step 1</h5>
            <div className="circles">
            <img src={active} alt="active-circle"/>
            <img src={inactive} alt="inactive-circle"/>
            <img src={inactive} alt="inactive-circle"/>
            <img src={inactive} alt="inactive-circle"/>
            <img src={inactive} alt="inactive-circle"/>
            </div>
        </div>
            <div className="input-container-1">
            <div className="property-name">
                <h4>Property Name</h4>
                <input type="text" className="property-name-input" onChange={e=>(updatePropertyName(e.target.value))}/>
            </div>
            <div className="property-description">
                <h4>Property Description</h4>
                <input type="text" className='property-description-input' onChange={e=>(updatePropertyDescription(e.target.value))}/>
            </div>
            <Link to = '/wizard/2' className="next-step-w1">Next Step</Link>
            </div>
    </div>
        )
    }
}

function mapStateToProps(state){
    const {propertyName,propertyDescription} = state;

    return {
        propertyName,
        propertyDescription
    }
}

export default connect(mapStateToProps, {updatePropertyName, updatePropertyDescription})(Wizard1);