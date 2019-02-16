const initState = {
  userData: null,
  userRepos: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_DATA":
      return {
        ...state,
        userData: action.data
      };
    case "USER_REPOS":
      return {
        ...state,
        userRepos: action.data
      };
    default:
      return state;
  }
};

export default reducer;
