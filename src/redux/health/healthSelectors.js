const getDaySummary = state => state.health.dayInfo.daySummary;
const getEatenProducts = state => state.health.dayInfo.eatenProducts;
const getNotAllowedProducts = state =>
  state.health.dailyRate.notAllowedProducts;

const getDailyRate = state => state.health.dailyRate.dailyRate;
const getDate = state => state.health.getDate.date;
const getProducts = state => state.health.product;

export default {
  getDaySummary,
  getEatenProducts,
  getNotAllowedProducts,
  getDailyRate,
  getDate,
  getProducts,
};
