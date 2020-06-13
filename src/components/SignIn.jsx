// @ts-nocheck
import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth } from "../firebase/firebase";
//import {signInWithGoogle} from "../firebase/firebase"
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { makeStyles } from "@material-ui/core/styles";

// Firebase.
import firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google , Facebook , Etc as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.YahooAuthProvider.PROVIDER_ID,
      firebase.auth.MicrosoftAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false,
    },
  };


  const classes = useStyles();
  return (
    <div className="container">
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Sign in
          </Typography>
          {error !== null && <div>{error}</div>}
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  alignItems="center"
                  label="Username or Email"
                  fullWidth
                  autoFocus
                  type="text"
                  name="userEmail"
                  value={email}
                  placeholder="Enter your email"
                  id="userEmail"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  alignItems="center"
                  label="Password"
                  fullWidth
                  autoFocus
                  type="text"
                  name="userPassword"
                  value={password}
                  placeholder="Enter your password"
                  id="userPassword"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  align="center"
                  onClick={(event) => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                  }}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={6}>
                <p>
                  Do not have an account?{" "}
                  <Link to="/signup" variant="body2">
                    Sign up
                  </Link>
                </p>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
};

export default SignIn;
