import React, { Component } from "react";
import styles from "./ListItem.module.scss";

class ListItem extends Component {
  render() {
    const markedStyle = this.props.isMarked ? styles.marked : "";
    return (
      <div className={styles.listContainer}>
        <li
          type="text"
          className={markedStyle}
          onClick={() => this.props.markAsDone(this.props.data.docId)}
        >
          {this.props.text}
        </li>
        <span className={styles.userInfo}>
          {" "}
          ...by {this.props.userName}{" "}
          <img
            src={this.props.userImage}
            alt="user img"
            width="20px"
            height="20px"
          ></img>
        </span>
        <button
          id="testButton3"
          className={styles.delete}
          onClick={() => this.props.deleteItem(this.props.data.docId)}
        >
          X
        </button>
        <button
          className={styles.edit}
          onClick={() => this.props.updateItem(this.props.data.docId)}
        >
          edit
        </button>
      </div>
    );
  }
}

export default ListItem;
