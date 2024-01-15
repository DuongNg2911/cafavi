import { useSelector } from "react-redux";
import { useState } from "react";
import "../styles/login.css";
import "../libs/fonts.css";
import api from "../api";

export default function Login() {
  const showLogin = useSelector((state) => state.showLogin.value);
  const [signup, setSignup] = useState(false);

  const LogIn = async () => {
    const email = document.getElementById("email-input").value;
    const params = { user_email: email };
    const valid = await api.get("/check_email", { params });
    console.log(valid);
  };

  return (
    <div
      className="login-site-container"
      style={{ display: showLogin === true ? "flex" : "none" }}
    >
      <div className="login-container">
        <div id="login-content">
          {signup === false ? (
            <p>Login to your account</p>
          ) : (
            <p>Create an account</p>
          )}
        </div>
        <div id="email-enter-area">
          <div id="email-enter-label">
            <p>Email</p>
          </div>
          <div id="email-enter-bar">
            <input id="email-input" placeholder="Enter email here"></input>
          </div>
        </div>
        <div id="password-enter-area">
          <div id="password-enter-label">
            <p>Password</p>
            {/* <a>Forget?</a> */}
          </div>
          <div id="password-enter-bar">
            <input
              type="password"
              id="password-input"
              placeholder="Enter password here"
            ></input>
          </div>
        </div>
        <div id="login-button" onClick={LogIn}>
          <p>Login now</p>
        </div>
        <div className="dummy">
          {signup === false ? (
            <p>
              Don't have any account ?{" "}
              <span
                onClick={() => {
                  setSignup(true);
                }}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <span
                onClick={() => {
                  setSignup(false);
                }}
              >
                Log In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
