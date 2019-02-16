export function fetchUserData(username) {
  return dispatch => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "USER_DATA",
          data
        });
      });
  };
}

export function fetchUserRepos(username) {
  return dispatch => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "USER_REPOS",
          data
        });
      });
  };
}
