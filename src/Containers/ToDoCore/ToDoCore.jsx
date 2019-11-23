import React, { Component } from "react";
import styles from "./ToDoCore.module.scss";
import ListItem from "../../Components/ListItem";
import { firestore } from "../../firebase";
import Button from "../../Components/Button";

class ToDoCore extends Component {
  state = {
    list: [],
    filteredList: [],
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
          list: list,
          filteredList: list
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

  markAsDone = docId => {
    firestore
      .collection("listItems")
      .doc(docId)
      .update({ isMarked: true })
      .then(this.renderListItems);
  };

  getTextValue = event => {
    this.setState({ textInput: event.target.value });
  };

  handleClick = event => {
    const filteredList = this.state.list.filter(item => {
      if (event.target.innerHTML === "Done") {
        return item.isMarked === true;
      } else if (event.target.innerHTML === "ToDo") {
        return item.isMarked === false;
      } else {
        return event.target.innerHTML === "Full list";
      }
    });
    this.setState({ filteredList: filteredList });
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
        <Button name={"Done"} onClick={this.handleClick}></Button>
        <Button name={"ToDo"} onClick={this.handleClick}></Button>
        <Button name={"Full list"} onClick={this.handleClick}></Button>
        <ul>
          {this.state.filteredList.map(item => (
            <ListItem
              markAsDone={this.markAsDone}
              deleteItem={this.deleteItem}
              text={item.text}
              key={item.docId}
              data={item}
              isMarked={item.isMarked}
            ></ListItem>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoCore;
