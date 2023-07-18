import React, { useState } from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import { ReactComponent as AuthLogo } from '../../assets/logo/auth-logo.svg'
import { ReactComponent as GoogleLogo } from '../../assets/logo/google.svg'
import { Link } from 'react-router-dom'

const Reset = () => {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const Submit = () => {}

  return (
    <AuthLayout>
      <div className="header">
        <div className="logo">
          <AuthLogo />
        </div>
        <div className="section-title">
          <div className="title">Reset Password</div>
          <div className="text">Please choose your new password</div>
        </div>
      </div>
      <div className="content">
        <div className="form">
          <div className="form-control">
            <div className="label">Enter your password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <div className="label">Enter your confirm password</div>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <button className="submit" onClick={Submit}>
            Reset Password
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Reset
