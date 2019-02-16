import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import Profile from "./profile";

class Dashboard extends Component {
  state = {
    username: null,
    isTrue: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isTrue: true
    });
  };
  render() {
    return (
      <div className="body">
        {this.state.isTrue ? (
          <Profile />
        ) : (
          <div>
            <div className="dashboard">
              <div className="form">
                <div className="form-inner">
                  <form>
                    <input
                      name="username"
                      type="text"
                      className="input"
                      placeholder="Enter User Name"
                      onChange={this.handleChange}
                    />
                    <a href={`/user/${this.state.username}/profile`}>Search</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect()(Dashboard);
