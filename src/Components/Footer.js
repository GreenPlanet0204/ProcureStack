import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo/logo.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="content">
          <div className="logo">
            <Logo />
            <div className="text">ProcureStack</div>
          </div>
          <div className="text">
            ProcureStack is an innovative and user-centric platform that
            redefines how you source electronic components. With our
            state-of-the-art search engine, intuitive interface, and advanced
            features like BOM management and real-time notifications,
            ProcureStack puts you in control, making procurement faster,
            smarter, and more exciting for all your electronic component needs.
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookie">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-content">
          <div className="text">
            © 2023. All rights reserved. contact@procurestack.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
