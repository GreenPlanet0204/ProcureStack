import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import { ReactComponent as AuthLogo } from '../../assets/logo/auth-logo.svg'
import ReactInputVerificationCode from 'react-input-verification-code'

const Verification = () => {
  return (
    <AuthLayout>
      <div className="header">
        <div className="logo">
          <AuthLogo />
        </div>
        <div className="section-title">
          <div className="title">Email Verification Code</div>
          <div className="text">
            We've send you code on jone.****@company.com
          </div>
        </div>
      </div>
      <div className="content">
        <div className="form">
          <div className="form-control">
            <ReactInputVerificationCode length={6} placeholder="" type="text" />
          </div>
          <div className="submit">Reset Password</div>
        </div>
      </div>
      <div className="auth-footer">
        <div className="row">
          <div className="text">
            Did not receive the email?
            <br />
            Check your spam filter, or
          </div>
          <a>Resend Code</a>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Verification
