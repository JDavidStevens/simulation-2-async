import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateLoan, updateMortgage, updateCancel } from "../../ducks/reducer";
import Banner from "../Banner/banner";
import "./w4.css";
import checked from "../../assets/step_completed.png";
import active from "../../assets/step_active.png";
import inactive from "../../assets/step_inactive.png";

class Wizard4 extends Component {
  render() {
    const { updateLoan, updateMortgage, updateCancel } = this.props;

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
              <h5>Step 4</h5>
              <div className="circles">
                <img src={checked} alt="checked-circle" />
                <img src={checked} alt="checked-circle" />
                <img src={checked} alt="checked-circle" />
                <img src={active} alt="active-circle" />
                <img src={inactive} alt="inactive-circle" />
              </div>
            </div>
            <div className="input-container-4">
              <h4 className="loan-title">Loan Amount</h4>
              <input
                className="loan-input"
                onChange={e => updateLoan(e.target.value)}
                value={this.props.loanAmount}
              />
              <h4 className="mortgage-title">Monthly Mortgage</h4>
              <input
                className="mortgage-input"
                onChange={e => updateMortgage(e.target.value)}
                value={this.props.mortgage}
              />
            </div>
            <div className="w4-nav-buttons">
              <Link to="/wizard/3" className="previous-step-w4">
                Previous Step
              </Link>
              <Link to="/wizard/5" className="next-step-w4">
                Next Step
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loanAmount, mortgage } = state;

  return {
    loanAmount,
    mortgage
  };
}

export default connect(
  mapStateToProps,
  { updateLoan, updateMortgage,updateCancel }
)(Wizard4);
