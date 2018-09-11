import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateAddress, updateCity, updateStateName,updateZip} from '../../ducks/reducer';
import './w2.css'
import Banner from '../Banner/banner';
import checked from '../../assets/step_completed.png';
import active from '../../assets/step_active.png';
import inactive from '../../assets/step_inactive.png';


class Wizard2 extends Component{
    render(){
        const {updateAddress,updateCity,updateStateName,updateZip} = this.props;

        return(
        <div>
          <Banner/>  
        <div className="tracker">
            <h3>Add new listing</h3>
            <Link to= '/dashboard' className="cancel">Cancel</Link>
            <h5>Step 2</h5>
            <div className="circles">
            <img src={checked} alt="checked-circle"/>
            <img src={active} alt="active-circle"/>
            <img src={inactive} alt="inactive-circle"/>
            <img src={inactive} alt="inactive-circle"/>
            <img src={inactive} alt="inactive-circle"/>
            </div>
        </div>
        <div className="input-container-2">
            <div className="address">
                <h4>Address</h4>
                <input type="text" className="address-input" onChange={e=>(updateAddress(e.target.value))}/>
            </div>
            <div className="city">
                <h4>City</h4>
                <input type="text" className='city-input' onChange={e=>(updateCity(e.target.value))}/>
            </div>
            <div className="state">
                <h4>State</h4>
                <input type="text" className='state-input' onChange={e=>(updateStateName(e.target.value))}/>
            </div>
            <div className="zip">
                <h4>Zip</h4>
                <input type="text" className='zip-input' onChange={e=>(updateZip(e.target.value))}/>
            </div>
            <Link to = '/wizard/1' className="next-step-w2">Previous Step</Link>
            <Link to = '/wizard/3' className="next-step-w2">Next Step</Link>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {address,city,stateName,zip} = state;

    return {
        address,
        city,
        stateName,
        zip
    }
}

export default connect(mapStateToProps, {updateAddress,updateCity,updateStateName,updateZip})(Wizard2);