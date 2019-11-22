import React, { Component } from "react";
import styles from "./ListItem.module.scss";

class ListItem extends Component {
  state = {};
  render() {
    return <li>{this.props.text}</li>;
  }
}

export default ListItem;
