import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import background from '../assets/login-bg.jpg';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.email.endsWith('@admin.com')) {
          console.log(user.email);
          navigate('/dashboard');
        } else {
          alert('Please enter a valid admin email address');
        }
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('LoggedIn with', user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        alert('Password reset email sent.');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const firstDivStyle = {
        backgroundColor: 'rgb(255, 250, 250)',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };
      const loginButtonStyle = {
        backgroundColor: '#8bf7cd',
        color: '#014f29',
        border: 'none'
      };
      const createButtonStyle = {
        backgroundColor: '#b672e3',
        border: 'none',
        color: '#48076b'
      };

  return (
    <div className="d-flex justify-content-center align-items-center custom-bg vh-100" style={firstDivStyle}>
      <div className="custom-bg p-3 rounded w-25 glass-style">
        <h2>
          <strong>Sign-In</strong>
        </h2>
        {forgotPassword ? (
          <div>
            <label htmlFor="reset-email">
              <strong>Enter Email to Reset Password</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="reset-email"
              className="form-control rounded-0"
              onChange={(event) => setResetEmail(event.target.value)}
            />
            <button className="btn btn-primary w-100 rounded-0" onClick={handleForgotPassword}>
              Reset Password
            </button>
            <button className="btn btn-default border w-100 rounded-0 text-decoration-none" onClick={() => setForgotPassword(false)}>
              Back to Login
            </button>
          </div>
        ) : (
          <form>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email </strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                className="form-control rounded-0"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">
                <strong> Password </strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button className="btn btn-success w-100 rounded-0" style={loginButtonStyle} onClick={handleLogin}>
              Login
            </button>
            <p> You agree to our terms and policies</p>
            <button className="btn btn-default border w-100 rounded-0 text-decoration-none" style={createButtonStyle} onClick={() => setForgotPassword(true)}>
              Forgot Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
