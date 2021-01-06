import React , { useState } from 'react';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    // no refresh
    e.preventDefault();

    // firebase login
  }

  const register = (e) => {
    // no refresh
    e.preventDefault();

    // do some firebase register
  }

  return (
    <div className="login">
      <div className="login__left">
        <img
        className="login__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="" />
      </div>
      <div className="login__right">
        <div className="login__info">
          <h1 className="login__title">Sign-in</h1>
          <form className="login__form">
            <h4>Email</h4>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <button
              className="login__btn"
              type="submit"
              onClick={signIn}>
              Login
            </button>
          </form>
          <p className="login__caution">
            By singing-in you agree to AMAZON FAKE CLONE'S Condition of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and
            our Interest-Based Ad Notice
          </p>
          <button
            className="login__registerBtn"
            onClick={register}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login;
