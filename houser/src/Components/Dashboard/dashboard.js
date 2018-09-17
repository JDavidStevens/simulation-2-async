import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import axios from "axios";
import Banner from "../Banner/banner";
import Delete from '../../assets/delete_icon.png';

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
    this.handleDelete=this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/properties`)
      .then(response => {
        this.setState({ properties: response.data});
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
        this.setState({ properties: response.data,filterValue: ''});

        console.log("filterGet:", response.data);
      })
      .catch(err => {
        console.log("filter axios request");
      });
  }

  handleDelete(property_id){
    axios.delete(`/api/properties/${property_id}`)
    
    .then(results=>{
      console.log("delete reply:",results)
      this.setState({properties: results.data})})
  }

  render() {
    let home = this.state.properties.map((element, index) => {
      return (
        <div className="home-listings-container" key={index}>
          <div className="listing-info">
          <button className="delete" onClick={()=>this.handleDelete(element.property_id)}><img src={Delete} alt=""/></button>
            <img src={element.img} alt="" />
            <h5>{element.propertyname}</h5>
            <p>{element.propertydescription}</p>
            <div className="details">
              <h5>
                Loan:
                {element.loanamount}
              </h5>
              <h5>
                Monthly Mortgage:
                {element.mortgage}
              </h5>
              <h5>
                Recommended Rent:
                {element.recommendedrent}
              </h5>
              <h5>
                Desired Rent:
                {element.desiredrent}
              </h5>
              <h5>
                Address:
                {element.address}
              </h5>
              <h5>
                City:
                {element.city}
              </h5>
              <h5>
                State:
                {element.statename}
              </h5>
              <h5>
                Zip:
                {element.zip}
              </h5>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Banner />
        <div className="page-border">
          <div className="page-content">
            <div className="add-link">
              <button className="add-new-prop-button">
                <Link to="/wizard/1" className="add-new-property">
                  Add new property
                </Link>
              </button>
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
          </div>
        </div>
      </div>
    );
  }
}
