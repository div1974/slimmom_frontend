import axios from 'axios'
import modalActions from "./modalActions";
import products from '../../components/DailyCaloriesItem/products.json'

//TODO: заменить ссылку на бекенд
axios.defaults.baseURL = "https://our-backend-that-doesnt-exist.com";

const getDailyCalories = (data) => async dispatch => {
    dispatch(modalActions.getDailyCaloriesRequest);
    try {
        //TODO: заменить хардкод, на обращение к бекенду, которого сейчас нет.
        // const response =  axios.get("/blabla", data);

        const dailyCalories = 10 * data.currentWeight +
            6.25 * data.height -
            5 * data.age -
            161 -
            10 * (data.currentWeight - data.desiredWeight);
        const bloodType = data.bloodType;
        data.products = products.filter((product) => {
            return (
                product.groupBloodNotAllowed[bloodType] === true
            );
        });
        data.dailyCalories = dailyCalories;
        dispatch(modalActions.getDailyCaloriesSuccess(data));
    } catch (error) {
        dispatch(modalActions.getDailyCaloriesError(error));
    }
};

export default {
    getDailyCalories,
}