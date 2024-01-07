import React from "react"
import "./Logo.css"
import logo from "../images/logo.svg"

const Logo: React.FC = () => {
  return (
    <div className="logo_container">
        <img src={logo} alt="logo" className="bg_logo" />
    </div>
  )
}
export default Logo