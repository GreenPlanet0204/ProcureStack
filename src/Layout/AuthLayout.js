import React from 'react'
import { ReactComponent as MailLogo } from '../assets/logo/mail.svg'

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="auth">{children}</div>
        </div>
        <div className="footer">
          <div className="text">© BOM Manager 2023</div>
          <div className="mail">
            <MailLogo />
            <div className="text">help@bomanager.com</div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="panel"></div>
      </div>
    </>
  )
}

export default AuthLayout
