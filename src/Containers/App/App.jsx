import React, { Component } from "react";
import styles from "./App.module.scss";
import Header from "../../Components/Header";
import ToDoCore from "../ToDoCore";

class App extends Component {
  state = {};
  render() {
    return (
      <div className={styles.appContainer}>
        <Header></Header>
        <ToDoCore></ToDoCore>
      </div>
    );
  }
}

export default App;
