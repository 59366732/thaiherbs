import React, { Component } from "react";
import "./App.css";

import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";

// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import ProfilePage from "./components/ProfilePage";
// import { UserContext } from "./providers/UserProvider";


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider>
          <Application />
        </UserProvider>
      </div>
    );
  }
}

export default App;
