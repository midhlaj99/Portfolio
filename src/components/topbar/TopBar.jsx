import React from 'react'
import { Mail, Call } from "@material-ui/icons";
import "./topbar.scss"

function TopBar({ menuOpen, setMenuOpen }) {

  return (
    <div className={`topbar ${menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <h3 className="logo">
            MJ
          </h3>
          <div className="itemContainer">
            <Call className="icon" />
            <span>9048487142</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:midhlaj@gmail.com">midhlaj003@gmail.com</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar