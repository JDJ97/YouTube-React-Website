import { NavLink } from "react-router-dom" 
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="NavBarContainer">
            <img />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar;