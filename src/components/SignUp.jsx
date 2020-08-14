import React, { useState } from "react";
import { Link } from "@reach/router";
import {
  auth,
  // signInWithGoogle,
  generateUserDocument,
} from "../firebase/firebase";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Links from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Links color="inherit" href="">
        Community Website for Thai herbs
      </Links>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
    margin: theme.spacing(0, 0, 2),
  },
}));

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "firstname") {
      setFirstname(value);
    } else if (name === "lastname") {
      setLastname(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirm(value);
    }
  };

  const classes = useStyles();
  return (
    <div>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {error !== null && <div>{error}</div>}
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  variant="outlined"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                  type="text"
                  name="firstname"
                  value={firstname}
                  placeholder="Enter your first name"
                  id="firstname"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lname"
                  variant="outlined"
                  required
                  fullWidth
                  label="Last Name"
                  autoFocus
                  type="text"
                  name="lastname"
                  value={lastname}
                  placeholder="Enter your last name"
                  id="lastname"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Display Name"
                  autoFocus
                  type="text"
                  name="displayName"
                  value={displayName}
                  placeholder="Enter your display name"
                  id="displayName"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Email"
                  autoFocus
                  type="email"
                  name="userEmail"
                  value={email}
                  placeholder="example@email.com"
                  id="userEmail"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  autoFocus
                  type="password"
                  name="userPassword"
                  value={password}
                  placeholder="Enter your password"
                  id="userPassword"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Confirm Password"
                  autoFocus
                  type="password"
                  name="confirmPassword"
                  value={confirm}
                  placeholder="Enter your password again"
                  id="confirmPassword"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive herb's information updated news and approve pending via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(event) => {
                createUserWithEmailAndPasswordHandler(event, email, password);
              }}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <p>
                  Already have an account?{" "}
                  <Link component={Link} to="/signin">
                    Sign in
                  </Link>
                </p>
              </Grid>
            </Grid>
            {/* <button
              variant="contained"
              color="primary"
              onClick={() => {
                try {
                  signInWithGoogle();
                } catch (error) {
                  console.error("Error signing in with Google", error);
                }
              }}
            >
              Sign In with Google
            </button> */}
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default SignUp;
