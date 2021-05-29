import { createAction } from '@reduxjs/toolkit';

const showNotification = createAction('notification/show');
const hideNotification = createAction('notification/hide');

export default { showNotification, hideNotification};