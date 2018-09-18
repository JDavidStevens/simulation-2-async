import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateAddress,
  updateCity,
  updateStateName,
  updateZip,
  updateCancel
} from "../../ducks/reducer";
import "./w2.css";
import Banner from "../Banner/banner";
import checked from "../../assets/step_completed.png";
import active from "../../assets/step_active.png";
import inactive from "../../assets/step_inactive.png";

class Wizard2 extends Component {
  render() {
    const {
      updateAddress,
      updateCity,
      updateStateName,
      updateZip
    } = this.props;

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
              <h5>Step 2</h5>
              <div className="circles">
                <img src={checked} alt="checked-circle" />
                <img src={active} alt="active-circle" />
                <img src={inactive} alt="inactive-circle" />
                <img src={inactive} alt="inactive-circle" />
                <img src={inactive} alt="inactive-circle" />
              </div>
            </div>
            <div className="input-container-2">
              <div className="address">
                <h4 className="address-title">Address</h4>
                <input
                  type="text"
                  className="address-input"
                  onChange={e => updateAddress(e.target.value)}
                />
              </div>
              <div className="cityState">
                <div className="city">
                  <h4 className="city-title">City</h4>
                  <input
                    type="text"
                    className="city-input"
                    onChange={e => updateCity(e.target.value)}
                  />
                </div>
                <div className="state">
                  <h4 className="state-title">State</h4>
                  <input
                    type="text"
                    className="state-input"
                    onChange={e => updateStateName(e.target.value)}
                  />
                </div>
              </div>
              <div className="zip">
                <h4 className="zip-title">Zip</h4>
                <input
                  type="text"
                  className="zip-input"
                  onChange={e => updateZip(e.target.value)}
                />
              </div>
              <div className="w2-nav-buttons">
                <Link to="/wizard/1" className="previous-step-w2">
                  Previous Step
                </Link>
                <Link to="/wizard/3" className="next-step-w2">
                  Next Step
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { address, city, stateName, zip } = state;

  return {
    address,
    city,
    stateName,
    zip
  };
}

export default connect(
  mapStateToProps,
  { updateAddress, updateCity, updateStateName, updateZip }
)(Wizard2);
