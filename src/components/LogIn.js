import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/LogIn.css";
import { hashString } from "react-hash-string";

import { fetchUser } from "../reducers/user";
import { useDispatch } from "react-redux";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { setGuest } from "../reducers/guest";

// firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJ_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STOR_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDR_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

firebase.initializeApp({
  apiKey: "AIzaSyAXsNmNFLAlhe9llgpU7lkayqvt4yuPhb0",
  authDomain: "booleanbakers.firebaseapp.com",
  projectId: "booleanbakers",
  storageBucket: "booleanbakers.appspot.com",
  messagingSenderId: "792285495931",
  appId: "1:792285495931:web:281671c3184a6efee398de",
});

const auth = firebase.auth();

const LogIn = () => {
  const [googleUser] = useAuthState(auth);
  const userRef = useRef();
  const errRef = useRef();
  const dispatch = useDispatch();

  let [userInfo, setUserInfo] = useState({ username: "", password: "" });
  let [errMsg, setErrMsg] = useState("");
  let [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userInfo]);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const profile = await auth.signInWithPopup(provider);
    window.localStorage.setItem(
      "COOKIE",
      profile.credential.idToken.slice(0, 15)
    );
    console.log("set");
  };

  const setCookie = async (username) => {
    let cookie = hashString(username);
    window.localStorage.setItem("COOKIE", cookie);
    return null;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setCookie(userInfo.username);
      dispatch(fetchUser(userInfo));
      setUserInfo({ username: "", password: "" });
      setSuccess(true); // THIS NEEDS TO CHANGE ONLY AFTER SUCCESSFUL LOGIN
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      // errRef.current.focus();
    }
  };

  function SignOut() {
    window.localStorage.removeItem("COOKIE");
    return (
      auth.currentUser && (
        <button className="signOutButton" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )
    );
  }

  const setGuestInfo = () => {
    const guestCookie = Math.floor(Math.random() * 10000000) + 1;
    dispatch(setGuest(guestCookie));
    window.sessionStorage.setItem("userSession", guestCookie);
  };

  return (
    <div className="LogIn container">
      {googleUser || success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to="/home">Go to Home</Link>
          </p>
          <>
            <SignOut />
          </>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              ref={userRef}
              autoComplete="off"
              required
            />

            <label htmlFor="password">Password:</label>
            <input name="password" type="password" id="password" required />
            <button>Sign In</button>
          </form>

          <button className="mb-3" onClick={signInWithGoogle}>
            Sign in with Google
          </button>

          <div>
            Need an Account?
            <br />
            <div className="line">
              <Link to="/register">Sign Up</Link>
            </div>
            <div>
              <Link to="/home" onClick={setGuestInfo}>
                Continue As Guest
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LogIn;
