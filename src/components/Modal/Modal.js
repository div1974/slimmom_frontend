import React, { Component } from "react";
import styles from "./modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.keyDownForClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDownForClose);
  }

  keyDownForClose = (e) => {
    if (e.code === "Escape") {
      this.props.onClick(e, true);
    }
  };

  render() {
    const { onClick } = this.props;
    return (
      <div onClick={onClick} className={styles.overlay}>
        {this.props.modalComponent}
      </div>
    );
  }
}
