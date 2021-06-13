import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { authentication, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import Footer from "./Footer";
function Login() {
  const [{ user }, dispatch] = useStateValue();
  const signIn = () => {
    authentication
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__body">
      <Button onClick={signIn}>SignIn with Google</Button>
        <img src= "/img.jpeg"
          alt="helpline logo of something"
        />
        <div className="login__text">
          <h1>Welcome to Ella's Community</h1>
        </div>
        <Footer />
        <robot/>
      </div>
    </div>
  );
}

export default Login;
