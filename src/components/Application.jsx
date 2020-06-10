import React, { useContext } from "react";
//import { Router } from "@reach/router"; 
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider"; 
import { UserContext } from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import themeFile from "./util/theme";

//Mui stuff
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//Navbar
import Navbar from "./navbar/Navbar";


const theme = createMuiTheme(themeFile);


function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}

export default Application;