/* eslint-disable no-unused-vars */
import React, { useContext,useState } from "react";
import { navigate } from "@reach/router"; 
import { UserContext } from "../providers/UserProvider";
import {auth,firestore,generateUserDocument} from "../firebase/firebase";

const ProfilePage = () => {
  const user = useContext(UserContext);  
  const [photoURL, setPhotoURL] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [displayName, setDisplayName] = useState("");
  console.log(user);
  
  const updateUserProfile = (event,displayName,email) => {
    event.preventDefault();
    console.log("in update")

    console.log("in data"+user.uid+","+displayName+","+email)
    generateUserDocument(user, {displayName});
    firestore.collection('users').doc(user.id).set({...user, displayName,email})  
    console.log("end")   

  };
  
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }   else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <div
          style={{
            background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
          className="border border-blue-300"
        ></div>
        <form className="">
        <h2 className = "text-2xl font-semibold">Display Name: {user.displayName}</h2>
          <label htmlFor="displayName" className="block">
            Display Name: 
          </label> 
          <input
            type="text"
            className="my-1 p-1 w-full "
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
          <h3 className = "italic">Email: {user.email}</h3>
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
            
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={event => {
              updateUserProfile(event,displayName,email);
            }}
          >
            Update
          </button>
        </form>
      </div>
      <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>
    </div>
  ) 
};

export default ProfilePage;