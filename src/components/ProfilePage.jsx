import React, { useContext, useState } from "react";
import { navigate } from "@reach/router";
import { UserContext } from "../providers/UserProvider";
import { auth, firestore, generateUserDocument } from "../firebase/firebase";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [email, setEmail] = useState(user.email);
  const [displayName, setDisplayName] = useState(user.displayName);
  console.log(user);

  const updateUserProfile = (event) => {
    event.preventDefault();
    generateUserDocument(user, { displayName });
    firestore
      .collection("users")
      .doc(user.uid)
      .update({ ...user, displayName, email });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex-start",
            marginLeft: "40%",
            background: `url(${
              photoURL ||
              "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
            })  `,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
        ></div>
        <form>
          <label htmlFor="Firstname">Firstname:</label>&nbsp;
          <input
            type="text"
            name="firstname"
            value={email}
            placeholder="Firstname"
            id="firstname"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <br />
          <label htmlFor="Lastname">Lastname:</label>&nbsp;
          <input
            type="text"
            name="lastname"
            value={email}
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
            value={email}
            placeholder="password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <br />
          <br />
          <button
            onClick={(event) => {
              updateUserProfile(event, displayName, email);
            }}
          >
            Update
          </button>
        </form>
      </div>
      <br />
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default ProfilePage;
