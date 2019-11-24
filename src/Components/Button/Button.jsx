import React, { Component } from "react";
import styles from "./Button.module.scss";

class Button extends Component {
  render() {
    return (
      <button className={styles.primary} onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
