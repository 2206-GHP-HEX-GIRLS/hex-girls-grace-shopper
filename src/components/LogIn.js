import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/LogIn.css';
import { createUser, fetchUser } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { setGuest } from '../reducers/guest';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../reducers/loggedIn';

firebase.initializeApp({
  apiKey: 'AIzaSyAXsNmNFLAlhe9llgpU7lkayqvt4yuPhb0',
  authDomain: 'booleanbakers.firebaseapp.com',
  projectId: 'booleanbakers',
  storageBucket: 'booleanbakers.appspot.com',
  messagingSenderId: '792285495931',
  appId: '1:792285495931:web:281671c3184a6efee398de',
});

export const auth = firebase.auth();

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let user = useSelector((state) => state.user);

  let [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    accountId: 0,
  });

  let [success, setSuccess] = useState(false);
  let [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
  }, [userInfo]);

  useEffect(() => {
    if (success) {
      navigate('/home');
    }
  });

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          createUser({
            username: user.uid,
            password: user.uid,
            accountId: accountNumGen(),
            thirdPartyUsername: user.displayName.replace(' ', ''),
          })
        )
          .then(window.localStorage.setItem('CURRENT_USER_ACCT', user.uid))
          .then(window.localStorage.setItem('userToken', user.uid))
          .then(setSuccess(true))
          .then(dispatch(logIn()));
      }
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
    dispatch(fetchUser(userInfo))
      .then(window.localStorage.setItem('CURRENT_USER_ACCT', user.accountId))
      .then(window.localStorage.setItem('userToken', user.password))
      .then(setUserInfo({ username: '', password: '' }))
      .then(setSuccess(true))
      .then(dispatch(logIn()));
  };

  const accountNumGen = () => {
    return Math.floor(Math.random() * 10000000000) + 1;
  };

  const setGuestInfo = () => {
    const guestCookie = accountNumGen();
    dispatch(setGuest(guestCookie))
      .then(window.sessionStorage.setItem('userToken', guestCookie))
      .then(window.localStorage.setItem('CURRENT_USER_ACCT', guestCookie))
      .then(dispatch(logIn()));
  };

  return (
    <div className="LogIn container">
      <section>
        <p className={errMsg ? 'errmsg' : 'offscreen'}>{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            autoComplete="off"
            required
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            id="password"
            required
            onChange={handleChange}
          />
          <button type="submit">Sign In</button>
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
    </div>
  );
};

export default LogIn;
