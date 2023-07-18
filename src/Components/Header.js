import React from 'react'
import { ReactComponent as Logo } from '../assets/logo/logo.svg'
import { ReactComponent as SettingLogo } from '../assets/logo/setting.svg'
import { ReactComponent as BellLogo } from '../assets/logo/bell.svg'

const Header = ({ tab }) => {
  console.log('tab', tab)
  return (
    <div className="header">
      <div className="container">
        <div className="content">
          <div className="logo">
            <Logo />
            <div className="text">ProcureStack</div>
          </div>
          <div className="menu">
            <div className={tab == 0 ? 'item active' : 'item'}>Home</div>
            <div className={tab == 1 ? 'item active' : 'item'}>
              BOM Management
            </div>
            <div className={tab == 2 ? 'item active' : 'item'}>Reports</div>
          </div>
        </div>
        <div className="content right">
          <div className="actions">
            <div className="item">
              <SettingLogo />
            </div>
            <div className="item">
              <BellLogo />
              <div className="pin">
                <div className="text">3</div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="avatar"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
