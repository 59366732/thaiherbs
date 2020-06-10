import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACMqy6eiQ3PHv-8nY3d5mKU0XWqzJt0aM",
  authDomain: "nuthaiherbs-fe4e0.firebaseapp.com",
  databaseURL: "https://nuthaiherbs-fe4e0.firebaseio.com",
  projectId: "nuthaiherbs-fe4e0",
  storageBucket: "nuthaiherbs-fe4e0.appspot.com",
  messagingSenderId: "208517615170",
  appId: "1:208517615170:web:ff61af7c5b1b9ec59aa7db",
  measurementId: "G-9PQ8ME1JEK"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
