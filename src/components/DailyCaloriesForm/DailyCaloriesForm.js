import React, { Component } from "react";
import styles from "./dailyCaloriesForm.module.css";
import Modal from "../Modal/Modal";
import DailyCaloriesItem from "../DailyCaloriesItem/DailyCaloriesItem";

export default class DailyCaloriesForm extends Component {
  state = {
    height: "",
    age: "",
    currentWeigth: "",
    desiredWeigth: "",
    bloodType: "",
    showModal: false,
    dailyCalories: 0,
  };

  handleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      dailyCalories:
        10 * this.state.currentWeigth +
        6.25 * this.state.height -
        5 * this.state.age -
        161 -
        10 * (this.state.currentWeigth - this.state.desiredWeigth),
    });

    this.setState({
      height: "",
      age: "",
      currentWeigth: "",
      desiredWeigth: "",
    });
    this.handleModal();
  };

  handleChangeFieldValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { height, age, currentWeigth, desiredWeigth } = this.state;
    return (
      <div className={styles.overlay}>
        <h2 className={styles.title}>Узнай свою суточную норму калорий</h2>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <div className={styles.input_wrapper_first}>
            <label className={styles.label_text}>
              <p>Рост*</p>
              <input
                name="height"
                type="number"
                min="0"
                required
                autoComplete="false"
                value={height}
                onChange={this.handleChangeFieldValue}
                className={styles.input}
              />
            </label>
            <label className={styles.label_text}>
              <p>Возраст*</p>
              <input
                type="number"
                name="age"
                required
                autoComplete="false"
                value={age}
                min="0"
                onChange={this.handleChangeFieldValue}
                className={styles.input}
              />
            </label>
            <label className={styles.label_text}>
              <p>Текущий вес*</p>
              <input
                name="currentWeigth"
                type="number"
                min="0"
                required
                autoComplete="false"
                value={currentWeigth}
                onChange={this.handleChangeFieldValue}
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.input_wrapper_second}>
            <label className={styles.label_text}>
              <p>Желаемый вес*</p>
              <input
                type="number"
                name="desiredWeigth"
                min="0"
                required
                autoComplete="false"
                value={desiredWeigth}
                onChange={this.handleChangeFieldValue}
                className={styles.input}
              />
            </label>
            <p className={styles.bloodtype_text}>Группа крови*</p>
            <div className={styles.radio_item}>
              <input
                id="1"
                type="radio"
                name="bloodType"
                required
                value="1"
                noValidate
                onChange={this.handleChangeFieldValue}
              />
              <label className={styles.label_text} htmlFor="1">
                1
              </label>
            </div>
            <div className={styles.radio_item}>
              <input
                id="2"
                type="radio"
                name="bloodType"
                required
                value="2"
                noValidate
                onChange={this.handleChangeFieldValue}
              />
              <label className={styles.label_text} htmlFor="2">
                2
              </label>
            </div>
            <div className={styles.radio_item}>
              <input
                id="3"
                type="radio"
                name="bloodType"
                required
                value="3"
                noValidate
                onChange={this.handleChangeFieldValue}
              />
              <label className={styles.label_text} htmlFor="3">
                3
              </label>
            </div>
            <div className={styles.radio_item}>
              <input
                id="4"
                type="radio"
                required
                name="bloodType"
                value="4"
                noValidate
                onChange={this.handleChangeFieldValue}
              />
              <label className={styles.label_text} htmlFor="4">
                4
              </label>
            </div>
          </div>
          <div className={styles.button_wrapper}>
            {this.state.showModal && (
              <Modal
                onClick={this.handleModal}
                dailyCalories={this.state.dailyCalories}
                modalComponent={
                  <DailyCaloriesItem
                    bloodType={this.state.bloodType}
                    dailyCalories={this.state.dailyCalories}
                  />
                }
              />
            )}
            <button className={styles.button} type="submit">
              Похудеть
            </button>
          </div>
        </form>
      </div>
    );
  }
}
