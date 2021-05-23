import { NavLink } from "react-router-dom" 
import "./NavBar.css"
import LogoPic from "./Images/vuetube.jpeg"

const NavBar = () => {
    return (
        <nav className="NavBarContainer">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Home</NavLink>
            <img src={LogoPic} alt="Youtube Logo"/>
        </nav>
    )
}

export default NavBar;