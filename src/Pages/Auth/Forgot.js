import React, { useState } from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import { ReactComponent as AuthLogo } from '../../assets/logo/auth-logo.svg'
import { ReactComponent as GoogleLogo } from '../../assets/logo/google.svg'
import { ReactComponent as FacebookLogo } from '../../assets/logo/facebook.svg'
import { ReactComponent as AppleLogo } from '../../assets/logo/apple.svg'
import { Link } from 'react-router-dom'
const Forgot = () => {
  const [email, setEmail] = useState('')
  return (
    <AuthLayout>
      <div className="header">
        <div className="logo">
          <AuthLogo />
        </div>
        <div className="section-title">
          <div className="title">Forgot password?</div>
          <div className="text">
            We will sent a password recover instructions
            <br />
            to your email
          </div>
        </div>
      </div>
      <div className="content">
        <div className="form">
          <div className="form-control">
            <input type="email" value={email} placeholder="Enter your email" />
          </div>
          <div className="submit">Sign In</div>
        </div>
        <div className="content-divider">
          <div className="divider" />
          <div className="text">OR</div>
          <div className="divider" />
        </div>
        <div className="social">
          <div className="btn">
            <GoogleLogo />
            <div className="text">Sign in with Google</div>
          </div>
          <div className="btn">
            <FacebookLogo />
            <div className="text">Sign in with Facebook</div>
          </div>
          <div className="btn">
            <AppleLogo />
            <div className="text">Sign in with Apple</div>
          </div>
        </div>
      </div>
      <div className="auth-footer">
        <div className="text">Already have an account?</div>
        <Link to="/signin">Log in</Link>
      </div>
    </AuthLayout>
  )
}

export default Forgot
