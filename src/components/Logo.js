import "./Logo.css"
import logo from "../images/logo.svg"
const Logo = () => {
  return (
    <div className="logo_container">
        <img src={logo} alt="logo" className="bg_logo" />
    </div>
  )
}
export default Logo