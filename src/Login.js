import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sq9Zw7FKyBGJzxjmzfEEXQHaEK%26pid%3DApi&f=1"
          alt=""
        />
        <h2>login into Slack</h2>
        <Button onClick={signIn}>Sign-in with google</Button>
      </div>
    </div>
  );
}

export default Login;
