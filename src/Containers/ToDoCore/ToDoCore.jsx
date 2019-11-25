import React, { Component } from "react";
import styles from "./ToDoCore.module.scss";
import ListItem from "../../Components/ListItem";
import { firestore } from "../../firebase";
import Button from "../../Components/Button";

class ToDoCore extends Component {
  state = {
    list: [],
    filteredList: [],
    textInput: "",
    userName: this.props.userName,
    userImage: this.props.userImage
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
      let data = {
        text: this.state.textInput,
        isMarked: false,
        userName: this.state.userName,
        userImage: this.state.userImage
      };
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

  updateItem = docId => {
    firestore
      .collection("listItems")
      .doc(docId)
      .update({ textInput: "" })
      .then(this.renderListItems);
  };

  getTextValue = event => {
    this.setState({ textInput: event.target.value });
  };

  handleChange = event => {
    let items = this.state.list;
    items = items.filter(item => {
      return (
        item.text.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: items, filteredList: items });
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
          id="testInput"
          type="text"
          placeholder="..add your stuff"
          onKeyPress={this.addListItem}
          onChange={this.getTextValue}
          value={this.state.textInput}
        ></input>
        <input
          type="text"
          placeholder="..search"
          onChange={this.handleChange}
        ></input>
        <div className={styles.buttonContainer}>
          <Button
            id="testButton"
            name={"Done"}
            onClick={this.handleClick}
          ></Button>
          <Button
            id="testButton2"
            name={"ToDo"}
            onClick={this.handleClick}
          ></Button>
          <Button
            id="testButton3"
            name={"Full list"}
            onClick={this.handleClick}
          ></Button>
        </div>
        <p>click on items to mark them as done</p>
        <ul>
          {this.state.filteredList.map(item => (
            <ListItem
              markAsDone={this.markAsDone}
              deleteItem={this.deleteItem}
              updateItem={this.updateItem}
              text={item.text}
              key={item.docId}
              data={item}
              isMarked={item.isMarked}
              userName={item.userName}
              userImage={item.userImage}
            ></ListItem>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoCore;
