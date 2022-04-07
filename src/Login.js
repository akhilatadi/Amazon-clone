import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import {db, auth } from "./firebase";
import { useHistory } from "react-router-dom";


function Login() {
    const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = e => {
    e.preventDefault();
auth.signInWithEmailAndPassword(email,password)
.then(auth => {
    history.push('/')
})
.catch(error => alert(error.message))
    //some fancy firebase stuff geezzzzz
  }
  const register = e =>{
      e.preventDefault();

auth
.createUserWithEmailAndPassword(email, password)
.then((auth) => {
    //sucessully created a new user
    
    if(auth) {
        history.push('/')
    }
})

.catch(error => alert(error.message))

      //do some fancy register bollocks
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h6> E-mail</h6>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h6>Password </h6>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signinButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's conditions of use & sale. please
          see our policy Notice, our cookie Notice and our interest based Ads
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
