import { createReducer } from '@reduxjs/toolkit';
import authActions from '../auth/authActions';
import healthActions from '../health/healthActions';

const loaderReducer = createReducer(false, {
  //==========================================authActions
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,

  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,

  //==========================================healthActions

  [healthActions.postEatenProductRequest]: () => true,
  [healthActions.postEatenProductSuccess]: () => false,
  [healthActions.postEatenProductError]: () => false,

  [healthActions.deleteDiaryItemRequest]: () => true,
  [healthActions.deleteDiaryItemSuccess]: () => false,
  [healthActions.deleteDiaryItemError]: () => false,
});

export default loaderReducer;
