import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./login.css";

function Login() {
  const [state, dispatch] = useStateValue();

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        console.log(user);
        dispatch({
          type: actionTypes.SET_USER,
          user: user.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png"
          alt="Twitter logo"
        />
        <h2>
          Twitter-Clone <span className="spanName"> @ijz-ahd</span>
        </h2>
        <Button onClick={handleSignIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}
export default Login;
