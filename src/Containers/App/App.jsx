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
      console.log(user);
    });
  };
  render() {
    return (
      <div className={styles.appContainer}>
        {this.state.isSignedin ? (
          <>
            <h2>
              <span>Hi</span> {firebase.auth().currentUser.displayName}
            </h2>
            <Header></Header>
            <ToDoCore
              userName={firebase.auth().currentUser.displayName}
              userImage={firebase.auth().currentUser.photoURL}
            ></ToDoCore>
            <Button
              name={"Sign Out"}
              onClick={() => firebase.auth().signOut()}
            ></Button>
          </>
        ) : (
          <>
            <Header></Header>
            <StyledFirebaseAuth
              className={styles.login}
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
