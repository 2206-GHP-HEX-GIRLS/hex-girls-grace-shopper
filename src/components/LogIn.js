import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/LogIn.css";
import { fetchUser } from "../reducers/user";
import { useDispatch } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { setGuest } from "../reducers/guest";
import { useNavigate } from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyAXsNmNFLAlhe9llgpU7lkayqvt4yuPhb0",
  authDomain: "booleanbakers.firebaseapp.com",
  projectId: "booleanbakers",
  storageBucket: "booleanbakers.appspot.com",
  messagingSenderId: "792285495931",
  appId: "1:792285495931:web:281671c3184a6efee398de",
});

export const auth = firebase.auth();

const LogIn = () => {
  const [googleUser] = useAuthState(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    accountId: 0,
  });

  let [errMsg, setErrMsg] = useState("");
  let [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [userInfo]);

  useEffect(() => {
    if (success) {
      navigate("/home");
    }
  });

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSuccess(true);
      }
      window.localStorage.setItem("CURRENT_USER", user.uid);
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
      accountId: accountNumGen(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(fetchUser(userInfo));
      // setSuccess(true); // THIS NEEDS TO CHANGE ONLY AFTER SUCCESSFUL LOGIN
      setUserInfo({ username: "", password: "" });
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
    }
  };

  function SignOut() {
    return (
      auth.currentUser && (
        <button className="signOutButton" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )
    );
  }

  const accountNumGen = () => {
    return Math.floor(Math.random() * 10000000) + 1;
  };

  const setGuestInfo = () => {
    const guestCookie = accountNumGen();
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
          <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" autoComplete="off" required />

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
