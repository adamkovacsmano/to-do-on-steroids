import React, { Component } from "react";
import styles from "./ListItem.module.scss";

class ListItem extends Component {
  state = {};
  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={() => this.props.deleteItem(this.props.data.docId)}>
          X
        </button>
      </li>
    );
  }
}

export default ListItem;
