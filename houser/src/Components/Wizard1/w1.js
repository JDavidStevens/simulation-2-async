import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updatePropertyName,
  updatePropertyDescription,
  updateCancel
} from "../../ducks/reducer";
import "./w1.css";
import Banner from "../Banner/banner";
import active from "../../assets/step_active.png";
import inactive from "../../assets/step_inactive.png";

class Wizard1 extends Component {
  
  render() {
    const { updatePropertyName, updatePropertyDescription } = this.props;
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
                  onClick={this.updateCancel}
                >
                  Cancel
                </Link>
              </div>
              <h5>Step 1</h5>
              <div className="circles">
                <img src={active} alt="active-circle" />
                <img src={inactive} alt="inactive-circle" />
                <img src={inactive} alt="inactive-circle" />
                <img src={inactive} alt="inactive-circle" />
                <img src={inactive} alt="inactive-circle" />
              </div>
            </div>
            <div className="input-container-1">
              <div>
                <h4 className="property-name">Property Name</h4>
                <input
                  type="text"
                  className="property-name-input"
                  onChange={e => updatePropertyName(e.target.value)}
                  value={this.props.propertyName}
                />
              </div>
              <div>
                <h4 className="property-description">Property Description</h4>
                {this.props.propertyDescription ? (
                  <textarea
                    type="text"
                    className="property-description-input"
                    onChange={e => updatePropertyDescription(e.target.value)}
                  >
                    {this.props.propertyDescription}
                  </textarea>
                ) : (
                  <textarea
                    type="text"
                    className="property-description-input"
                    onChange={e => updatePropertyDescription(e.target.value)}
                  />
                )}
              </div>
              <button className="next-step-button">
                <Link to="/wizard/2" className="next-step-w1">
                  Next Step
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { propertyName, propertyDescription,cancel } = state;

  return {
    propertyName,
    propertyDescription,
    cancel
  };
}

export default connect(
  mapStateToProps,
  { updatePropertyName, updatePropertyDescription, updateCancel }
)(Wizard1);
