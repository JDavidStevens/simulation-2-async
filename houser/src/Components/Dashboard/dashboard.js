import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import axios from "axios";
import Banner from "../Banner/banner";
import Delete from "../../assets/delete_icon.png";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      properties: [],
      unfiltered: true,
      filterValue: ""
    };

    this.filterInput = this.filterInput.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/checkForSession")
      .catch(() => {
        this.props.history.push("/");
        alert("Please enter a valid username and password");
      })
      

    axios
      .get(`/api/properties`)
      .then(response => {
        this.setState({ properties: response.data });
      })
      .catch(err => {
        console.log("allprops axios request");
      });
  }

  filterInput(value) {
    this.setState({ filterValue: value });
  }

  handleFilter() {
    axios
      .get(`/api/properties?filter=${this.state.filterValue}`)
      // console.log("prefilter",this.state.filterValue)
      .then(response => {
        this.setState({ properties: response.data, filterValue: "" });

        console.log("filterGet:", response.data);
      })
      .catch(err => {
        console.log("filter axios request");
      });
  }

  handleDelete(property_id) {
    axios
      .delete(`/api/properties/${property_id}`)

      .then(results => {
        console.log("delete reply:", results);
        this.setState({ properties: results.data });
      });
  }

  render() {
    let home = this.state.properties.map((element, index) => {
      return (
        <div className="home-listings-container" key={index}>
          <div className="image-container">
          {/* <img clasName="dashboard-image" src={element.img} alt="150 x 150" /> */}
            {element.img ? (
              <img clasName="dashboard-image" src={element.img}/>
            ) : (
              <input
                className="img-placeholder"
                disabled
                placeholder="150 x 150"
              />
            )}
          </div>
          <div className="name-description-container">
            <h5 className="property-name">{element.propertyname}</h5>
            <p className="property-description">
              {element.propertydescription}
            </p>
          </div>
          <div className="vl" />
          <div className="details">
            <ul className="details-info">
              <li>Loan: ${element.loanamount}</li>
              <li>Monthly Mortgage: ${element.mortgage}</li>
              <li>Recommended Rent: ${element.mortgage * 1.25}</li>
              <li>Desired Rent: ${element.desiredrent}</li>
              <li>
                Address:
                {" " + element.address}
              </li>
              <li>
                City:
                {" " + element.city}
              </li>
              <li>
                State:
                {" " + element.statename}
              </li>
              <li>
                Zip:
                {" " + element.zip}
              </li>
            </ul>
            <div className="delete-container">
              <button
                className="delete"
                onClick={() => this.handleDelete(element.property_id)}
              >
                <img src={Delete} alt="" className="delete-icon"/>
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="page-border">
        <Banner />
        <div>
          <div className="page-content">
            <div className="add-link">
              <Link to="/wizard/1" className="add-new-property">
                Add new property
              </Link>
            </div>
            <div className="filter-container">
              <p className="dashboard-instructions">
                List properties with "desired rent" greater than: $
              </p>
              <input
                className="filter-input"
                placeholder="0"
                value={this.state.filterValue}
                onChange={e => this.filterInput(e.target.value)}
              />
              <button className="filter-button" onClick={this.handleFilter}>
                Filter
              </button>
              <button className="reset-filter" onClick={this.componentDidMount}>
                Reset
              </button>
            </div>
            <hr className="dashboard-divider" />
            <h4 className="home-listings">Home Listings</h4>
            <div>{home}</div>
            <div className="page-end" />
          </div>
        </div>
      </div>
    );
  }
}
