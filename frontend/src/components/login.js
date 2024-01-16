import { useSelector } from "react-redux";
import { useState } from "react";
import "../styles/login.css";
import "../libs/fonts.css";
import api from "../api";
import bcrypt from "bcryptjs";
import { useDispatch } from "react-redux";
import { changeState } from "../states/login_state";

export default function Login() {
  const showLogin = useSelector((state) => state.showLogin.value);
  const [signup, setSignup] = useState(false);
  const dispatch = useDispatch();

  const LoginSiteOnclick = (e) => {
    if (e.target === document.getElementById("login-site-container")) {
      dispatch(changeState(false));
    }
  };
  const LogIn = async () => {
    if (signup === false) {
      const email = document.getElementById("email-input").value;
      const password = document.getElementById("password-input").value;

      if (
        (email === "" && password === "") ||
        (email === "" && password !== "") ||
        (email !== "" && password === "")
      ) {
        document.getElementById("email-input").value = "";
        document.getElementById("password-input").value = "";
        document.getElementById("password-enter-bar").style.border =
          "1px solid red";
        document.getElementById("email-enter-bar").style.border =
          "1px solid red";
      } else {
        const params = { user_email: email };
        const valid = await api.get("/check_email", { params });

        if (typeof valid.data === "object") {
          document.getElementById("email-input").value = "";
          document.getElementById("password-input").value = "";
          document.getElementById("password-enter-bar").style.border =
            "1px solid red";
          document.getElementById("email-enter-bar").style.border =
            "1px solid red";
        } else {
          const hash = bcrypt.hashSync(password, valid.data);
          const data = { hashed_password: hash, email: email };
          const response = await api.post("/signin", data);
          if (response.response === "Login Successfully") {
            dispatch(changeState(false));
          } else {
            document.getElementById("email-input").value = "";
            document.getElementById("password-input").value = "";
            document.getElementById("password-enter-bar").style.border =
              "1px solid red";
            document.getElementById("email-enter-bar").style.border =
              "1px solid red";
          }
        }
      }
    } else {
      const email = document.getElementById("email-input").value;
      const password = document.getElementById("password-input").value;

      if (
        (email === "" && password === "") ||
        (email === "" && password !== "") ||
        (email !== "" && password === "")
      ) {
        document.getElementById("email-input").value = "";
        document.getElementById("password-input").value = "";
        document.getElementById("password-enter-bar").style.border =
          "1px solid red";
        document.getElementById("email-enter-bar").style.border =
          "1px solid red";
      } else {
        const params = { email: email, password: password };
        const response = await api.post("/signup", params);
        if (response === "Signup successfully") {
          dispatch(changeState(false));
        } else {
          document.getElementById("email-input").value = "";
          document.getElementById("password-input").value = "";
          document.getElementById("password-enter-bar").style.border =
            "1px solid red";
          document.getElementById("email-enter-bar").style.border =
            "1px solid red";
        }
      }
    }
  };

  return (
    <div
      className="login-site-container"
      id="login-site-container"
      style={{ display: showLogin === true ? "flex" : "none" }}
      onClick={LoginSiteOnclick}
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
