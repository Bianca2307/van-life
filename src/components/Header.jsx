import { Link, NavLink } from "react-router-dom"
import user from "../assets/user.png"

export default function Header() {


    function fakeLogOut() {
        localStorage.removeItem("loggedin");
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">
                #VANLIFE
            </Link>
            <nav>
                <NavLink
                    to="/host"
                    className={({ isActive }) =>
                        isActive ? "active-link" : null
                    }
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "active-link" : null
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    className={({ isActive }) =>
                        isActive ? "active-link" : null
                    }
                >
                    Vans
                </NavLink>
                <NavLink to="/login" className="login-link">
                    <img src={user} alt="user" className="login-icon" />
                </NavLink>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    );
}