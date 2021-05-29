import { combineReducers, createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initialState = { username: '', email: '', userData: {}, id: '' };

const userReducer = createReducer(initialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => ({
    username: payload.username,
    email: payload.email,
    userData: payload.userData,
    id: payload.id,
  }),
  [authActions.logOutSuccess]: () => initialState,
});
const accessTokenReducer = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.refreshSuccess]: (_, { payload }) => payload.newAccessToken,
  [authActions.logOutSuccess]: () => null,
  [authActions.refreshError]: () => null,
});
const refreshTokenReducer = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.refreshToken,
  [authActions.refreshSuccess]: (_, { payload }) => payload.newRefreshToken,
  [authActions.logOutSuccess]: () => null,
  [authActions.refreshError]: () => null,
});
const sidReducer = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.sid,
  [authActions.refreshSuccess]: (_, { payload }) => payload.sid,
  [authActions.logOutSuccess]: () => null,
  [authActions.refreshError]: () => null,
});

const authReducer = combineReducers({
  user: userReducer,
  accessToken: accessTokenReducer,
  refreshToken: refreshTokenReducer,
  sid: sidReducer,
});

export default authReducer;
