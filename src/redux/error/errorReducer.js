import { createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import healthActions from '../health/healthActions';

const errorReducer = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.refreshError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [healthActions.getDailyRateError]: (_, { payload }) => payload,
  [healthActions.getDayInfoError]: (_, { payload }) => payload,
  [healthActions.getProductError]: (_, { payload }) => payload,
  [healthActions.getUserInfoError]: (_, { payload }) => payload,
  [healthActions.postEatenProductError]: (_, { payload }) => payload,
  [healthActions.deleteDiaryItemError]: (_, { payload }) => payload,

  [authActions.registerRequest]: () => null,
  [authActions.loginRequest]: () => null,
  [authActions.logOutRequest]: () => null,
  [authActions.refreshRequest]: () => null,
  [authActions.getCurrentUserRequest]: () => null,
  [healthActions.getDailyRateRequest]: () => null,
  [healthActions.getDayInfoRequest]: () => null,
  [healthActions.getProductRequest]: () => null,
  [healthActions.getUserInfoRequest]: () => null,
  [healthActions.postEatenProductRequest]: () => null,
  [healthActions.deleteDiaryItemRequest]: () => null,
});

export default errorReducer;
