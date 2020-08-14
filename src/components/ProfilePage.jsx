// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { navigate } from "@reach/router";
import { UserContext } from "../providers/UserProvider";
import { auth, firestore, generateUserDocument } from "../firebase/firebase";
import "../components/Styles.css";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { makeStyles } from "@material-ui/core/styles";

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

const ProfilePage = () => {
  const user = useContext(UserContext);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [firstName, setFirstname] = useState(user.firstName);
  const [lastName, setLastname] = useState(user.lastName);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [error, setError] = useState(null);
  console.log(user);

  const updateUserProfile = (event) => {
    event.preventDefault();
    generateUserDocument(user, { displayName });
    firestore
      .collection("users")
      .doc(user.uid)
      .update({ ...user, firstName, lastName, displayName, email, password });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "firstName") {
      setFirstname(value);
    } else if (name === "lastName") {
      setLastname(value);
    }
  };
  const classes = useStyles();
  return (
    <div className="container">
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div
            style={{
              display: "flex-start",
              marginLeft: "35%",
              background: `url(${
                photoURL ||
                "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
              })  `,
              backgroundSize: "cover",
              height: "200px",
              width: "200px",
            }}
          ></div>
        <div className={classes.paper}>
          {error !== null && <div>{error}</div>}
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label htmlFor="Firstname">Firstname:</label>&nbsp;
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  placeholder="Firstname"
                  id="firstname"
                  onChange={(event) => onChangeHandler(event)}
                />
                <br />
                <br />
                <label htmlFor="Lastname">Lastname:</label>&nbsp;
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  placeholder="Lastname"
                  id="lastname"
                  onChange={(event) => onChangeHandler(event)}
                />
                <br />
                <br />
                <label htmlFor="displayName">Display Name:</label>&nbsp;
                <input
                  type="text"
                  name="displayName"
                  value={displayName}
                  placeholder="somename"
                  id="displayName"
                  onChange={(event) => onChangeHandler(event)}
                />
                <br />
                <br />
                <label htmlFor="userEmail">Email:</label>&nbsp;
                <input
                  type="email"
                  name="userEmail"
                  value={email}
                  placeholder="somename@example.com"
                  id="userEmail"
                  onChange={(event) => onChangeHandler(event)}
                />
                <br />
                <br />
                <label htmlFor="userPassword">Password:</label>&nbsp;
                <input
                  type="password"
                  name="userPassword"
                  value={password}
                  placeholder="password"
                  id="userPassword"
                  onChange={(event) => onChangeHandler(event)}
                />
                <br />
                <br />
              </Grid>
              <Grid item xs={24}>
                <Button
                  style={{float: "left", width: "130px"}}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  align="center"
                  onClick={(event) => {
                    updateUserProfile(event,firstName , lastName, displayName, email, password);
                  }}
                >
                  Update
                </Button>&nbsp;&nbsp;
                <Button
                  style={{float: "right", width: "225px"}}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  align="center"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  Sign out
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
