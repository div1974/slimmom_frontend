import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from "@reduxjs/toolkit";
import modalActions from "./modalActions";

const modalInitialState = {
    height: "",
    age: "",
    currentWeight: "",
    desiredWeight: "",
    bloodType: "",
    showModal: false,
    dailyCalories: 0,
    products: []
};
const dailyCalories = createReducer(modalInitialState, {
    [modalActions.getDailyCaloriesRequest]: (_, { payload }) => payload,
    [modalActions.getDailyCaloriesSuccess]: (_, { payload }) => payload,
    [modalActions.getDailyCaloriesError]: (_, { payload }) => payload,
});

export default combineReducers({
    dailyCalories,
});
