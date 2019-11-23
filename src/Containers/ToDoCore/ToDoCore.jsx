import React, { Component } from "react";
import styles from "./ToDoCore.module.scss";
import ListItem from "../../Components/ListItem";
import { firestore } from "../../firebase";

class ToDoCore extends Component {
  state = {
    list: [],
    textInput: ""
  };

  renderListItems = () => {
    firestore
      .collection("listItems")
      .get()
      .then(querySnapshot => {
        const list = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        this.setState({
          list: list
        });
      });
  };
  componentDidMount = () => {
    this.renderListItems();
    document.addEventListener("keydown", this.addListItem, false);
  };

  addListItem = event => {
    if (event.keyCode === 13) {
      let data = { text: this.state.textInput, isMarked: false };
      firestore
        .collection("listItems")
        .add(data)
        .then(() => this.renderListItems())
        .catch(console.log("hups"));
    }
  };

  deleteItem = docId => {
    firestore
      .collection("listItems")
      .doc(docId)
      .delete()
      .then(this.renderListItems);
  };

  getTextValue = event => {
    this.setState({ textInput: event.target.value });
  };

  render() {
    return (
      <div className={styles.container}>
        <input
          type="text"
          onKeyPress={this.addListItem}
          onChange={this.getTextValue}
          value={this.state.textInput}
        ></input>
        <ul>
          {this.state.list.map(item => (
            <ListItem
              text={item.text}
              deleteItem={this.deleteItem}
              key={item.docId}
              data={item}
            ></ListItem>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoCore;
