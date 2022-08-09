import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../reducers/user';
import './css/Register.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('');

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ username: user, password: pwd }));
    setSuccess(true);
    setUser('');
    setPwd('');
    setMatchPwd('');
  };

  return (
    <div className="Register">
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/">Sign In</Link>
          </p>
        </section>
      ) : (
        <section>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            {/* <label htmlFor="email">Email:</label>
            <input
              type="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            /> */}

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              invalid={validName ? 'false' : 'true'}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              className={
                userFocus && user && !validName ? 'instructions' : 'offscreen'
              }
            >
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              invalid={validPwd ? 'false' : 'true'}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character such as:
              <br />
              <span label="exclamation mark">!</span>{' '}
              <span label="at symbol">@</span> <span label="hashtag">#</span>{' '}
              <span label="dollar sign">$</span> <span label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">Confirm Password:</label>
            <input
              type="password"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              invalid={validMatch ? 'false' : 'true'}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              className={
                matchFocus && !validMatch ? 'instructions' : 'offscreen'
              }
            >
              Must match the first password.
            </p>

            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Register;
