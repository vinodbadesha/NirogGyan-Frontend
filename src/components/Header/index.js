import { Link } from "react-router-dom"
import "./index.css"

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-link">
                <h1 className="logo">NirgoGyan</h1>
            </Link>
            <ul className="nav-items">
                <li>Home</li>
                <li>Consult Us</li>
                <li>Book Lab Test</li>
                <li>About</li>
                <li>Help</li>
            </ul>
            <button className="signup-button">Login/Signup</button>
        </div>
    )
}

export default Header