import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Layout = ({ tab, children }) => {
  return (
    <div className="container">
      <Header tab={tab} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
