import React, { Component } from "react";
import "./login.css";
import axios from "axios";
import authLogo from "../../assets/auth_logo.png";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      username: "",
      password: ""
    };

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login() {
    const { username, password } = this.state;

    if (username !== "" && password !== "") {
      axios
        .post(`/api/auth/login`, { username: username, password: password })
        .then(response => {
          this.props.history.push("/dashboard");
        })
        .catch(() => {
          this.props.history.push("/");
        });
    } else {
      alert(
        "Please enter your username and password or register for an account"
      );
    }
  }

  register() {
    const { username, password } = this.state;
    if (username !== "" && password !== "") {
      axios
        .post(`/api/auth/register`, { username, password })
        .then(response => {
          this.props.history.push("/dashboard");
        })
        .catch(err => {
          console.log("register axios request");
        });
    } else {
      alert("Please enter a username and password to register for an account");
    }
  }

  handleUsername(value) {
    this.setState({ username: value });
  }

  handlePassword(value) {
    this.setState({ password: value });
  }

  render() {
    return (
      <div className="auth-page">
        <div className="auth-content">
          <div className="login-logo">
            <img src={authLogo} className="auth-logo" alt="" />
          </div>
          <div>
            <h3 className="username">Username</h3>
            <input
              className="login-input"
              type="text"
              onChange={e => this.handleUsername(e.target.value)}
            />
            <h3 className="password">Password</h3>
            <input
              className="login-input"
              type="text"
              onChange={e => this.handlePassword(e.target.value)}
            />
          </div>
          <div>
            <button className="login-button" onClick={this.login}>
              Login
            </button>
            <button className="register-button" onClick={this.register}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

// login() {
//   const { username, password } = this.state;

//   if (username !== "" && password !== "") {
//     axios
//       .post(`/api/auth/login`, { username: username, password: password })
//       .then(response => {
//         this.props.history.push("/dashboard");
//       })
//       // .catch(err => {
//       //   console.log("login axios request");
//         .catch(()=>{
//           (this.props.history.push("/"))
//       });
//   } else {
//     alert(
//       "Please enter your username and password or register for an account"
//     );
//   }
// }
