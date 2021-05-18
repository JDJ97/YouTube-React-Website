import { NavLink } from "react-router-dom" 

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar;