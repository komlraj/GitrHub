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
    const { userData, userRepos } = this.props;

    return (
      <div>
        {!userData && !userData ? (
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
            {/* Header Part */}
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
                    <span className="tab active-tab">
                      Repositories
                      <span className="count">{userData.public_repos}</span>
                    </span>
                    <span className="tab">
                      Followers
                      <span className="count">{userData.followers}</span>
                    </span>
                    <span className="tab">
                      Following
                      <span className="count">{userData.following}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body Part */}
            <div className="container">
              <div className="card-container">
                {userRepos &&
                  userRepos.map(repo => {
                    return (
                      <div key={repo.id} className="card">
                        <div className="view-card">
                          <button className="view-btn">View</button>
                        </div>
                        <div className="repo-card">
                          <div className="card-navbar">
                            <span>
                              <i className="fas fa-eye icon" />
                              <span className="count">{repo.watchers}</span>
                            </span>
                            <span>
                              <i className="fas fa-star icon" />
                              <span className="count">
                                {repo.stargazers_count}
                              </span>
                            </span>
                            <span>
                              <i className="fas fa-code-branch icon" />
                              <span className="count">{repo.forks}</span>
                            </span>
                          </div>
                          <span className="card-title">{repo.name}</span>
                        </div>
                      </div>
                    );
                  })}
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
