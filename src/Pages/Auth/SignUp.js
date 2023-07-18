import React, { useState } from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import { ReactComponent as AuthLogo } from '../../assets/logo/auth-logo.svg'
import { ReactComponent as GoogleLogo } from '../../assets/logo/google.svg'
import { ReactComponent as FacebookLogo } from '../../assets/logo/facebook.svg'
import { ReactComponent as AppleLogo } from '../../assets/logo/apple.svg'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  return (
    <AuthLayout>
      {step === 1 && (
        <>
          <div className="header">
            <div className="logo">
              <AuthLogo />
            </div>
            <div className="section-title">
              <div className="title">Create an account</div>
              <div className="text">Start your 30-day free trial.</div>
            </div>
          </div>
          <div className="content">
            <div className="form">
              <div className="form-control">
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                />
              </div>
              <div className="submit" onClick={() => setStep(2)}>
                Get started
              </div>
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
        </>
      )}
      {step === 2 && (
        <>
          <div className="header">
            <div className="logo">
              <AuthLogo />
            </div>
            <div className="section-title">
              <div className="title">Choose a password</div>
              <div className="text">Must be least 8 characters.</div>
            </div>
          </div>
          <div className="content">
            <div className="form">
              <div className="form-control">
                <input
                  type="password"
                  value={password}
                  placeholder="Choose a password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  value={confirm}
                  placeholder="Confirm password"
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
              <div className="submit">Continue</div>
            </div>
          </div>
        </>
      )}
    </AuthLayout>
  )
}

export default SignUp
