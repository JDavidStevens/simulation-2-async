import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateLoan,updateMortgage} from '../../ducks/reducer';
import './w4.css'
import Banner from '../Banner/banner';
import checked from '../../assets/step_completed.png';
import active from '../../assets/step_active.png';
import inactive from '../../assets/step_inactive.png';


export default class Wizard4 extends Component{
    render(){
        const {updateLoan,updateMortgage} = this.props;
        
        return(
            <div>
                <Banner/>
                <div className="tracker">
                    <h3>Add new listing</h3>
                    <Link to= '/dashboard' className="cancel">Cancel</Link>
                    <h5>Step 2</h5>
                    <div className="circles">
                        <img src={checked} alt="checked-circle"/>
                        <img src={checked} alt="checked-circle"/>
                        <img src={checked} alt="checked-circle"/>
                        <img src={active} alt="active-circle"/>
                        <img src={inactive} alt="inactive-circle"/>
                    </div>
                    <div className="inputs-container">
                        <h4 className="loan-tite">Loan Amount</h4>
                        <input className="loan-input" onChange={e=>(updateLoan(e.target.value))}/>
                        <h4 className="mortgage-title">Monthly Mortgage</h4>
                        <input className="mortgage-input" onChange={e=>(updateMortgage(e.target.value))}/>
                    </div>
                    <Link to = '/wizard/3' className="next-step-w4">Previous Step</Link>
                    <Link to = '/wizard/5' className="next-step-w4">Next Step</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {loanAmount,mortgage}=state;

    return{
        loanAmount,
        mortgage
    }
}

export default connect(mapStateToProps, {updateLoan,updateMortgage})(Wizard4);