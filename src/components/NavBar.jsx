import { Link } from "react-router-dom"
import logo from "../assets/sitelogo.jpg"


export default function NavBar(){
    return(
        <>
         <header className="header">
            <figure className="logoHolder">
                <img src={logo} alt="sitelogo" className="sitelogo" />
            </figure>
            <nav>
            <Link to="/jobs">Find Jobs</Link>
            <Link to="/employers">Find Talent</Link>
            {/* <Link to="/employerProfile">My Profile</Link> */}
            <Link to="/employers" id="login">Login</Link>
            </nav>
            </header>
        </>
    )
}