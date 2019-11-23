import React, { Component } from "react";
import styles from "./ListItem.module.scss";

class ListItem extends Component {
  render() {
    const markedStyle = this.props.isMarked ? styles.marked : "";
    return (
      <>
        <li
          className={markedStyle}
          onClick={() => this.props.markAsDone(this.props.data.docId)}
        >
          {this.props.text}
        </li>
        <button onClick={() => this.props.deleteItem(this.props.data.docId)}>
          X
        </button>
      </>
    );
  }
}

export default ListItem;
