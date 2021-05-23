import {createAction} from "@reduxjs/toolkit";

const getDailyCaloriesRequest = createAction('modal/getDailyCaloriesRequest')
const getDailyCaloriesSuccess = createAction('modal/getDailyCaloriesSuccess')
const getDailyCaloriesError = createAction('modal/getDailyCaloriesError')

export default {
    getDailyCaloriesRequest,
    getDailyCaloriesSuccess,
    getDailyCaloriesError
}