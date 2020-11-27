import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    // firebase login shit

    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        history.push("/");
      }
    });
  };

  const register = (e) => {
    e.preventDefault();
    // firebase registration shit

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          alt='Login logo'
          src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type='submit' className='login__singIn' onClick={signIn}>
            Sign-In
          </button>
        </form>

        <button
          onClick={register}
          type='submit'
          className='login__registration'>
          Create Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
