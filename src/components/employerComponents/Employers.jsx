import Logo from "../../assets/sitelogo.jpg"
import Footer from "./Footer"
import TalentCards from "./TalentCards"
import { Link } from "react-router-dom"
import EmployerNavBar from "./EmployerNavBar"

export default function Employers(){
    return(
        <>
        <EmployerNavBar />
            <div id="employerContainer">
                <UserCard />
                <section className="employerIntro">
                    <h1>
                        How hiring should work.
                    </h1>
                    <h2>
                        You can now hire the best talent in any given field.
                        We have the best there is out there, right here.
                    </h2>
                    <Link to="/jobform">
                        Get Started
                    </Link>
                    {/* <Link to="jobForm">
                        Post a Job
                    </Link> */}
                </section>
            </div>
            <TalentCards />
            <Footer />
        </>
    )
}

function UserCard(){
    return(
        <div id="userCard">
            <h1>My Profile</h1>
            <figure className="UserImage">
                <img className="profileImage" src={Logo}alt="Profile icon" />
            </figure>
            <input type="text" value="John Doe" name="employerName" id="username"/>
            <input type="text" value="Individual" name="company"/>
            <input type="text" value="Nairobi, Kenya" name="location"/>
            <input type="text" value="Posted Jobs: 0" name="postedJobs"/>
        </div>
    )
}
export {UserCard}