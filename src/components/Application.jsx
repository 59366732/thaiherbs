// @ts-nocheck
import React, { useContext } from "react";
//import { Router } from "@reach/router";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Search from "./Search";
import QandA from "./QandA";

import UserProvider from "../providers/UserProvider";
import { UserContext } from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
// eslint-disable-next-line no-unused-vars
import PasswordReset from "./PasswordReset";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import themeFile from "../util/theme";

//Mui stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//Navbar
import Navbar from "../navbar/Navbar";

const theme = createMuiTheme(themeFile);

function Application() {
  const user = useContext(UserContext);
  return user ? (
    <ProfilePage />
  ) : (
    <UserProvider>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/q_and_a" component={QandA} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    </UserProvider>
  );
}

export default Application;
