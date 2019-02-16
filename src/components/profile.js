import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData, fetchUserRepos } from "../actions/action";

class profile extends Component {
  componentDidMount = () => {
    const username = this.props.location.pathname.split("/")[2];
    this.props.dispatch(fetchUserData(username));
    this.props.dispatch(fetchUserRepos(username));
  };

  render() {
    const { userData } = this.props;

    return (
      <div>
        {!userData ? (
          <div className="lds-spinner">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        ) : (
          <div>
            <div className="header-background">
              <div className="user-image">
                <img
                  src={userData.avatar_url}
                  alt="user"
                  className="user-img"
                />
              </div>
              <div>
                <div className="user-background">
                  <div className="user">
                    <span>{userData.name}</span>
                    <span>{userData.login}</span>
                  </div>
                </div>
                <div className="user-info">
                  <div className="user-detail">
                    <span>
                      Repositories<span>{userData.public_repos}</span>
                    </span>
                    <span>
                      Followers<span>{userData.followers}</span>
                    </span>
                    <span>
                      Following<span>{userData.following}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapState(state) {
  return {
    userData: state.userData,
    userRepos: state.userRepos
  };
}

export default connect(mapState)(profile);
