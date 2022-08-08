import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/LogIn.css';
// import { GoogleLogin } from 'react-google-login';

const LogIn = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setAuth({ user, pwd, roles, accessToken });
    try {
      setUser('');
      setPwd('');
    } catch (err) {
      if (!err.response) {
        setErrMsg('No Server Response');
      } else if (err.response.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="LogIn">
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to="/">Go to Home</Link>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

// // const clientId = process.env.GOOGLE_LOGIN_CLIENT_ID;
// //NOT CALLING CLIENT ID PROPERLY WILL NEED TO DETERMINE WHY OR IF IT EVEN NEEDS TO BE HIDDEN

// const clientId =
//   '792285495931-75b5p0n3tv076s1rq5q69cl9q9pnlvol.apps.googleusercontent.com';

// const LogIn = () => {
//   const onLoginSuccess = (res) => {
//     console.log('Login Success:', res.profileObj);
//   };

//   const onLoginFailure = (res) => {
//     console.log('Login Failed:', res);
//   };

//   return (
//     <div>
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Sign In"
//         onSuccess={onLoginSuccess}
//         onFailure={onLoginFailure}
//         cookiePolicy={'single_host_origin'}
//         isSignedIn={true}
//       />
//     </div>
//   );
// };

export default LogIn;
