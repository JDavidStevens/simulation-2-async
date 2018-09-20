import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateDesiredRent, updateCancel} from "../../ducks/reducer";
import Banner from "../Banner/banner";
import axios from "axios";
import "./w5.css";
import checked from "../../assets/step_completed.png";
import active from "../../assets/step_active.png";

class Wizard5 extends Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
  }

  submit() {
    let {
      propertyName,
      propertyDescription,
      address,
      city,
      stateName,
      zip,
      img,
      loanAmount,
      mortgage,
      desiredRent,
    } = this.props.state;
    // this info is passed as props from the reducer on an object named state.

    axios
      .post(`/api/properties`, {
        // do not add an id after '/api/properties this comes from sessions which can only be found on the back-end!!!
        propertyName,
        propertyDescription,
        address,
        city,
        stateName,
        zip,
        img,
        loanAmount,
        mortgage,
        desiredRent
      })
      .then(() => this.props.history.push("/dashboard"))
      .catch(err => {
        console.log("submit axios request");
      });
  }

  render() {
    const { updateDesiredRent,updateCancel} = this.props;
    

    return (
      <div>
        <Banner />
        <div className="page-border">
          <div className="page-content">
            <div className="tracker">
              <div className="tracker-top">
                <h3 className="add-new-listing">Add new listing</h3>
                <Link
                  className="cancel-link"
                  to="/dashboard"
                  onClick={updateCancel}
                >
                  Cancel
                </Link>
              </div>
              <h5>Step 5</h5>
              <div className="circles">
                <img src={checked} alt="checked-circle" />
                <img src={checked} alt="checked-circle" />
                <img src={checked} alt="checked-circle" />
                <img src={checked} alt="checked-circle" />
                <img src={active} alt="inactive-circle" />
              </div>
            </div>
            <div className="recommend">
              <h5>Recommended Rent ${this.props.mortgage * 1.25}</h5>
              {console.log("mortgage?",this.props.mortgage)}
            </div>
            <div className="input-container-5">
              <h4 className="desired-rent-title">Desired Rent</h4>
              <input
                className="desired-rent-input"
                onChange={e => updateDesiredRent(e.target.value)}
              />
            </div>
            <div className="w5-nav-buttons">
              <Link to="/wizard/4" className="previous-step-w5">
                Previous Step
              </Link>
              <a className="complete" onClick={this.submit}>
                Complete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { mortgage } = state;
  return {
    state,
    mortgage
  };
}
//connects data
// since we are returning all of state, we do not need to specifically name updateDesiredRent as a mapStateToProps parameter or in the return statement
export default connect(
  mapStateToProps,
  { updateDesiredRent, updateCancel}
)(Wizard5);

//alt shift f

