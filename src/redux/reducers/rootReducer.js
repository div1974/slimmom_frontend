import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../auth/authReducer';
import errorReducer from '../error/errorReducer';
import healthReducer from '../health/healthReducer';
import loaderReducer from '../reducers/loaderReducer';
import modalReducer from '../modal/modalReducer';
import notificationReducer from '../notif/notificReducer';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  health: healthReducer,
  loading: loaderReducer,
  error: errorReducer,
  modal: modalReducer,
  notification: notificationReducer
});

export default rootReducer;
