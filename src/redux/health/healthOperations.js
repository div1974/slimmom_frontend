import axios from 'axios';
import moment from 'moment';
import healthActions from '../health/healthActions';
import notificActions from '../notif/notificActions';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const getUserInfo = () => async dispatch => {
  dispatch(healthActions.getUserInfoRequest);
  try {
    const response = await axios.get('/user');
    dispatch(healthActions.getUserInfoSuccess(response.data));
  } catch (error) {
    dispatch(healthActions.getUserInfoError(error));
  }
};

const getDailyRate = (data, id = '') => async dispatch => {
  dispatch(healthActions.getDailyRateRequest);
  try {
    const endpoint = id ? `/daily-rate/${id}` : '/daily-rate';
    const response = await axios.post(endpoint, data);
    dispatch(healthActions.getDailyRateSuccess(response.data));
  } catch (error) {
    dispatch(healthActions.getDailyRateError(error));
  }
};

const getProduct = query => async dispatch => {
  dispatch(healthActions.getProductRequest);
  if (query.length >= 2) {
    try {
      const response = await axios.get(`/product?search=${query}`);
      dispatch(healthActions.getProductSuccess(response.data));
    } catch (error) {
      dispatch(healthActions.getProductError(error));
    }
  }
};

const getDayInfo = (
  date = { date: moment(Date.now()).format('YYYY-MM-DD') },
) => async dispatch => {
  dispatch(healthActions.getDayInfoRequest());
  try {
    const response = await axios.post('/day/info', date);
    response.data.eatenProducts
      ? dispatch(healthActions.getDayInfoSuccess(response.data))
      : dispatch(
          healthActions.getDayInfoSuccess({
            date: date.date,
            eatenProducts: [],
            daySummary: {},
          }),
        );
  } catch (error) {
    dispatch(healthActions.getDayInfoError(error));
  }
};

const postEatenProduct = product => async dispatch => {
  dispatch(healthActions.postEatenProductRequest());
  try {
    const response = await axios.post('/day', {
      ...product,
      date: product.date
        ? product.date
        : moment(Date.now()).format('YYYY-MM-DD'),
    });
    dispatch(healthActions.postEatenProductSuccess(response.data));
  } catch (error) {
    dispatch(healthActions.postEatenProductError(error));
  }
};

const setDate = date => async dispatch => {
  dispatch(healthActions.getDateSuccess(date));
};

const deleteDiaryItem = id => async (dispatch, getState) => {
  const day = getState().health.dayInfo.id;
  const token = getState().auth.accessToken;
  const obj = {
    dayId: day,
    eatenProductId: id,
  };
  //console.log(day);
  dispatch(healthActions.deleteDiaryItemRequest());

  try {
    const response = await axios.delete('/day', {
      data: obj,
    });
    dispatch(healthActions.deleteDiaryItemSuccess(id));
    dispatch(notificActions.showNotification());
    setTimeout(() => {
      dispatch(notificActions.hideNotification());
    }, 2000);
  } catch (error) {
    dispatch(healthActions.deleteDiaryItemError(error.response.data.message));
    dispatch(notificActions.showNotification());
    setTimeout(() => {
      dispatch(notificActions.hideNotification());
    }, 3000);
  }
};

export default {
  getUserInfo,
  getDailyRate,
  getProduct,
  getDayInfo,
  postEatenProduct,
  setDate,
  deleteDiaryItem,
};
