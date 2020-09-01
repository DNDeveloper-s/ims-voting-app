import React from 'react';
import {Button} from "@material-ui/core";
import GoogleIcon from "../icons/GoogleIcon";
import "./Login.scss";
import {auth, provider} from "../firebase";
import firebase from "firebase";

import LoginImage from '../assets/images/495078-PHE69C-919.jpg';

const Login = (props) => {


  const signIn = () => {
    return auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      return auth.signInWithPopup(provider);
    }).then()
      .catch(e => console.log(e.message));
  };

  return (
    <div className="login wrapper">
      <div className="login-modal">
        <div className="login-title">
          <p>Welcome, Login first!</p>
        </div>
        <img className="login-image" src={LoginImage} alt=""/>
        <div className="login-action">
          <Button
            onClick={signIn}
            variant="contained"
            style={{
              backgroundColor: "#4285f4",
              color: "#fff",
              fontSize: '18px',
              height: '40px',
              textTransform: 'capitalize'
            }}>
            <div className="login-action-icon">
              <GoogleIcon fill={'#fff'}/>
            </div>
            Sign in with Google
          </Button>
        </div>
        <div className="login-subTitle">
          <p>Please, make sure to login with your IMS g-mail account.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
