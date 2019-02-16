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
                <i class="fab fa-github" />
                <form>
                  <h1 id="tittle">GitHub User Search</h1>
                  <input
                    name="username"
                    type="text"
                    className="input"
                    placeholder="&#128269; Enter User Name"
                    onChange={this.handleChange}
                  />
                  <a
                    className="search-button"
                    href={`/user/${this.state.username}/profile`}
                  >
                    Search
                  </a>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect()(Dashboard);
