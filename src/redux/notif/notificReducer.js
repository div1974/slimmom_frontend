import { createReducer } from '@reduxjs/toolkit';
import notificActions from '../notif/notificActions';

const notificationReducer = createReducer(false, {
  [notificActions.showNotification]: () => true,
  [notificActions.hideNotification]: () => false,
});

export default notificationReducer;