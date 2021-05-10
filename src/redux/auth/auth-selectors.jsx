const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.email;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getErrorStatus = state => state.auth.error.status;

const authSelectors = {
  getErrorStatus,
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};
export default authSelectors;
