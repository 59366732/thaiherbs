/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { navigate } from "@reach/router";
import { UserContext } from "../providers/UserProvider";
import { auth, firestore, generateUserDocument } from "../firebase/firebase";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  console.log(user);

  const updateUserProfile = (event, displayName, email) => {
    event.preventDefault();
    console.log("in update");

    console.log("in data" + user.uid + "," + displayName + "," + email);
    generateUserDocument(user, { displayName });
    firestore
      .collection("users")
      .doc(user.id)
      .set({ ...user, displayName, email });
    console.log("end");
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
            background: `url(${
              photoURL ||
              "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
            })  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
        ></div>
        <form>
          <h2>Display Name: {user.displayName}</h2>
          <label htmlFor="displayName">Display Name:</label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
          <h3>Email: {user.email}</h3>
          <label htmlFor="userEmail">
            Email:
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />

          <button
            onClick={(event) => {
              updateUserProfile(event, displayName, email);
            }}
          >
            Update
          </button>
        </form>
      </div>
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
