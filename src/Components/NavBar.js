import { NavLink } from "react-router-dom" 
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="NavBarContainer">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Home</NavLink>
            <img src="https://variety.com/wp-content/uploads/2020/06/youtube-logo.png" alt="Youtube Logo"/>
        </nav>
    )
}

export default NavBar;