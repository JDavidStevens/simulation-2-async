import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateImg, updateCancel } from "../../ducks/reducer";
import Banner from "../Banner/banner";
import "./w3.css";
import checked from "../../assets/step_completed.png";
import active from "../../assets/step_active.png";
import inactive from "../../assets/step_inactive.png";

class Wizard3 extends Component {
  constructor() {
    super();

    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
  }

  handleImageChange(value) {
    this.setState({
      imagePreviewUrl: value
    });
    this.props.updateImg(value);
  }

  goBack(){
    window.history.back();
  }

  render() {
    

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt=""/>;
    }

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
              <h5>Step 3</h5>
              <div className="circles">
                <img src={checked} alt="checked-circle" />
                <img src={checked} alt="checked-circle" />
                <img src={active} alt="active-circle" />
                <img src={inactive} alt="inactive-circle" />
                <img src={inactive} alt="inactive-circle" />
              </div>
            </div>
            {(this.state.imagePreviewUrl)?(
            <div className="image-preview">{$imagePreview}</div>):(
                <input disabled placeholder="Preview" className="empty-preview"/>
            )}
            <div className="image-url-container">
              <h4 className="image-url-input-title">Image URL</h4>
              <input
                className="image-url-input"
                onChange={e => this.handleImageChange(e.target.value)}
                value={this.props.img}
              />
            </div>
            <div className="w3-nav-buttons">
              <Link to="/wizard/2" className="previous-step-w3">
                Previous Step
              </Link>
              <Link to="/wizard/4" className="next-step-w3">
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
  const { img } = state;

  return {
    img
  };
}

export default connect(
  mapStateToProps,
  { updateImg }
)(Wizard3);
