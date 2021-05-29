import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');


const logOutRequest = createAction('auth/logOutRequest');
const logOutSuccess = createAction('auth/logOutSuccess');
const logOutError = createAction('auth/logOutError');

const refreshRequest = createAction('auth/refreshRequest');
const refreshSuccess = createAction('auth/refreshSuccess');
const refreshError = createAction('auth/refreshError');


const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  refreshRequest,
  refreshSuccess,
  refreshError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
