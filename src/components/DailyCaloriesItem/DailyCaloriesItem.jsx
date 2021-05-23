import React, { Component } from "react";
import styles from "./dailyCaloriesItem.module.css";

export default class DailyCaloriesItem extends Component {
  state = {
    isOpen: true,
  };

  handleCloseModal = (e) => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div className={styles.modal}>
        <div>
          <h3 className={styles.title_norm}>
            Ваша рекомендуемая суточная норма калорий составляет
          </h3>
          <div className={styles.calories_wrapper}>
            <span className={styles.number_сalories}>
              {this.props.dailyCalories}
            </span>
            <span className={styles.text_сalories}>ккал</span>
          </div>
        </div>
        <div className={styles.product_wrapper}>
          <h5 className={styles.title_product}>
            Продукты, которые вам не рекомендуется употреблять
          </h5>
          <ol className={styles.list}>
            {this.props.products.map((product, index) => {
                return index < 5 ? (
                  <li key={index}>{product.title.ru}</li>
                ) : (
                  ""
                );
              })}
          </ol>
        </div>
        <button type="submit" className={styles.button}>
          Начать худеть
        </button>
        <button
          type="button"
          onClick={this.handleCloseModal}
          className={styles.close_button}
        >
          x
        </button>
      </div>
    );
  }
}
