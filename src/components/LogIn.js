import React from 'react';
import { GoogleLogin } from 'react-google-login';

// const clientId = process.env.GOOGLE_LOGIN_CLIENT_ID;
//NOT CALLING CLIENT ID PROPERLY WILL NEED TO DETERMINE WHY OR IF IT EVEN NEEDS TO BE HIDDEN

const clientId =
  '792285495931-75b5p0n3tv076s1rq5q69cl9q9pnlvol.apps.googleusercontent.com';

const LogIn = () => {
  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
  };

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default LogIn;
