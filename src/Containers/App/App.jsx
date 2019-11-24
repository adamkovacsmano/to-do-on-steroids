import React, { Component } from "react";
import styles from "./App.module.scss";
import Header from "../../Components/Header";
import ToDoCore from "../ToDoCore";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Button from "../../Components/Button";

class App extends Component {
  state = { isSignedin: false };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedin: !!user });
    });
  };
  render() {
    return (
      <div className={styles.appContainer}>
        {this.state.isSignedin ? (
          <>
            <Header></Header>
            <h1>Hi {firebase.auth().currentUser.displayName}</h1>
            <ToDoCore></ToDoCore>
            <Button
              name={"Sign Out"}
              onClick={() => firebase.auth().signOut()}
            ></Button>
          </>
        ) : (
          <>
            <Header></Header>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
