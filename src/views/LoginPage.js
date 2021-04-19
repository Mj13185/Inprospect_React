import React, { useState } from "react";
import mainLogo from "../assets/logo_inprospect.png";
import "../main.css";
export default function LoginPage() {
  const [agree, setAgree] = useState(false);
  // const [error, seterror] = useState("");

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const [signup, setSignup] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirm_password: "",
  });
  /*
  const validate = () => {
    if (!signup.password) {
      alert("Please enter your password.");
      seterror("true");
    }

    if (!signup.confirm_password) {
      alert("Please enter your confirm password.");
      seterror("true");
    }
    if (
      typeof signup.password !== "undefined" &&
      typeof signup.confirm_password !== "undefined"
    ) {
      if (signup.password !== signup.confirm_password) {
        alert("Passwords don't match.");
        seterror("true");
      }
    }
  };*/

  const signUpApi = () => {
    // validate();
    //if (error === "true") {
    // alert("please recheck password");
    // } else {
    fetch("http://localhost:4000/user/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: signup.username,
        fullname: signup.fullname,
        email: signup.email,
        password: signup.password,
      }),
    });
    //  }
  };

  const loginApi = () => {
    // validate();
    //if (error === "true") {
    // alert("please recheck password");
    // } else {
    fetch("http://localhost:4000/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signup.email,
        password: signup.password,
      }),
    }).then((res) => {
      console.log(res);
    });
    //  }
  };

  return (
    <div>
      <div
        className="image"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img src={mainLogo} style={{ width: "120px" }} alt="Logo" />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="signupModal">
          <p style={{ color: "tomato", fontWeight: "500", marginLeft: "10px" }}>
            Sign up for free access <br />
            to the community of knowledge!
          </p>
          <input
            className="form-control border-0 margin5"
            type="text"
            placeholder="Enter your Full Name "
            onChange={(e) =>
              setSignup(
                { fullname: e.target.value },
                console.log(signup.fullname)
              )
            }
          />
          <input
            className="form-control border-0 margin5"
            type="text"
            placeholder="Create a username for yourself "
            onChange={(e) => setSignup({ username: e.target.value })}
          />
          <div
            className="password"
            style={{ display: "flex", flexDirection: "row" }}
            onChange={(e) => setSignup({ password: e.target.value })}
          >
            <input
              className="form-control border-0 margin5"
              type="password"
              placeholder=" Set a Password"
              onChange={(e) => setSignup({ confirm_password: e.target.value })}
            />
            <input
              className="form-control border-0"
              type="password"
              placeholder=" Confirm Password "
              onChange={(e) => setSignup({ confirm_password: e.target.value })}
              style={{
                marginLeft: "5px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            />
          </div>

          <input
            className="form-control border-0 margin5"
            type="text"
            placeholder="Enter valid email address  "
            onChange={(e) => setSignup({ email: e.target.value })}
          />
          <div style={{ padding: "10px" }}>
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree" style={{ marginLeft: "10px" }}>
              I agree to <a htmlFor="#">terms and conditions</a>
            </label>
          </div>

          <button
            disabled={!agree}
            className="loginButton"
            onClick={signUpApi}
            style={{ marginLeft: "10px" }}
          >
            Continue
          </button>
        </div>
        <div className="loginModal">
          <div className="signIcard">
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              Already Signed Up ?
            </p>
            <input
              className="form-control border-0"
              type="text"
              placeholder="Email"
              onChange={(e) => setSignin({ email: e.target.value })}
              style={{ backgroundColor: "whitesmoke", margin: "10px" }}
            />
            <input
              className="form-control border-0"
              type="password"
              placeholder="Password"
              onChange={(e) => setSignin({ password: e.target.value })}
              style={{ backgroundColor: "whitesmoke", margin: "10px" }}
            />
            <button
              className="commentBtn"
              style={{
                marginLeft: "10px",
                borderRadius: "5px",
                width: "200px",
                fontSize: "15px",
                margin: "10px",
                fontWeight: "500",
              }}
              onClick={loginApi}
            >
              Continue
            </button>
            <a>Forgot Password</a>
          </div>
        </div>
      </div>
    </div>
  );
}
