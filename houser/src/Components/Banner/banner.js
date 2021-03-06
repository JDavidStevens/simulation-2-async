import React, { Component } from "react";
import "./banner.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import headerLogo from "../../assets/header_logo.png";

class Banner extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout() {
    axios
      .post("/api/auth/logout")
      .then(() => this.props.history.push("/"))
      .catch(err => {
        console.log("logout axios request");
      });
    }

  render() {
    if (this.props.location.pathName !== "/") {
      return (
        <div className="banner-container">
          <div className="logo-title-container">
            <img src={headerLogo} alt="" className="header-logo" />
            <h2 className="houser">Houser</h2>
            <h2 className="banner-dashboard">Dashboard</h2>
          </div>
          <div className="logout-container">
            <a className="logout" onClick={this.logout}>
              Logout
            </a>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Banner);
