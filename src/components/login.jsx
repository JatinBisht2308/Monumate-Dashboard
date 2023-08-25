import React from 'react';

function login() {
  const divStyle = {
    backgroundColor: 'rgb(235, 235, 235)'
  };
  const firstDivStyle = {
    backgroundColor: 'rgb(255, 250, 250)'
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
      <div className="custom-bg p-3 rounded w-25" style={divStyle}>
        <h2>
          <strong>Sign-In</strong>
        </h2>
        <form action="" >
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email </strong>{' '}
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-0"
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
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0" style={loginButtonStyle}>
            Login
          </button>
          <p> You agree to our terms and policies</p>
          <div className="btn btn-default border w-100 rounded-0 text-decoration-none" style={createButtonStyle}>
            Create Account
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
