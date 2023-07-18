import React, { useState } from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import { ReactComponent as AuthLogo } from '../../assets/logo/auth-logo.svg'
import { ReactComponent as GoogleLogo } from '../../assets/logo/google.svg'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const Submit = () => {
    const user = {
      email: email,
      password: password,
    }
    console.log('user', user)
  }

  return (
    <AuthLayout>
      <div className="header">
        <div className="logo">
          <AuthLogo />
        </div>
        <div className="section-title">
          <div className="title">Welcome back</div>
          <div className="text">Welcome back! Please enter your details.</div>
        </div>
      </div>
      <div className="content">
        <div className="form">
          <div className="form-control">
            <div className="label">Email</div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <div className="label">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="checkbox">
            <input type="checkbox" />
            <div className="label">Remember for 30 days</div>
          </div>
          <Link to="/forgot" className="forgot">
            Forget password
          </Link>
        </div>
        <div className="actions">
          <button className="submit" onClick={Submit}>
            Sign in
          </button>
          <div className="social">
            <div className="google-login btn">
              <GoogleLogo />
              <div className="text">Sign in with Google</div>
            </div>
          </div>
        </div>
      </div>
      <div className="auth-footer">
        <div className="text">Don't have an account?</div>
        <Link to="/signup">Sign Up</Link>
      </div>
    </AuthLayout>
  )
}

export default SignIn
