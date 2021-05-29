import axios from 'axios';
import authActions from './authActions';
import notificActions from '../notif/notificActions';


axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registration = data => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post(`/auth/register`, data);
    token.set(response.data.accessToken);
    const loginValues = { email: data.email, password: data.password };

    dispatch(notificActions.showNotification());
    
    setTimeout(() => {
      dispatch(notificActions.hideNotification());
    }, 1000);

    setTimeout(() => {
      dispatch(authActions.registerSuccess(response.data));
    }, 1500);

      dispatch(logIn(loginValues));

  } catch (error) {
    dispatch(notificActions.showNotification());
    setTimeout(() => {
      dispatch(notificActions.hideNotification());
    }, 2000);
    dispatch(authActions.registerError(error.response.data.message));
  }
};

const logIn = data => async dispatch => {

  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post(`/auth/login`, data);
    token.set(response.data.accessToken);
  
    dispatch(notificActions.showNotification());
    
    setTimeout(() => {
      dispatch(notificActions.hideNotification());
    }, 1000);

    setTimeout(() => {
      dispatch(authActions.loginSuccess(response.data));
    }, 1500);

  } catch (error) {
    dispatch(notificActions.showNotification());
    setTimeout(() => {
      dispatch(notificActions.hideNotification());
    }, 2000);
    dispatch(authActions.loginError(error.response.data.message));
    
  }
};


const logOutOperation = () => async dispatch => {
  dispatch(authActions.logOutRequest());
  try {
    await axios.post(`/auth/logout`);
    token.unset();
    dispatch(authActions.logOutSuccess());
  } catch (error) {
    dispatch(authActions.logOutError(error));
  }
};
const refreshOperation = () => async (dispatch, getState) => {
  const {
    auth: {
      refreshToken: persistRefreshToken,
      accessToken: persistAccessToken,
      sid: persistSid,
    },
  } = getState();
  if (!persistRefreshToken) return;
  token.set(persistRefreshToken);
  dispatch(authActions.refreshRequest());
  try {
    const response = await axios.post(`/auth/refresh`, { sid: persistSid });
    if (response?.data) {
      dispatch(authActions.refreshSuccess(response.data));
      token.set(response.data.newAccessToken);
      const userResponse = await axios.get('/user');
      dispatch(authActions.getCurrentUserSuccess(userResponse.data));
    }
  } catch (error) {
    await dispatch(authActions.refreshError(error));
    await dispatch(authActions.logOutSuccess());
    throw new Error(error);
  }
};
export default {
  registration,
  logIn,
  logOutOperation,
  refreshOperation,
};
