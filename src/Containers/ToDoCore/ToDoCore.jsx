import React, { Component } from "react";
import styles from "./ToDoCore.module.scss";
import ListItem from "../../Components/ListItem";

class ToDoCore extends Component {
  state = {
    list: [],
    textInput: "",
    textOutput: ""
  };

  componentDidMount = () => {
    document.addEventListener("keydown", this.addListItem, false);
  };

  addListItem = event => {
    if (event.keyCode === 13) {
      this.setState({ textOutput: this.state.textInput });
      this.state.list.push(this.state.textOutput);
      console.log(this.state.list);
      this.setState({ textOutput: "" });
    }
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
          {this.state.list.map((item, index) => (
            <ListItem text={`${item}`} key={index}></ListItem>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoCore;
