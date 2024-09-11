import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li>
                        <Link className="home" to="/">
                        <img className="svg-icon" src="/icons/futbol-solid.svg" alt="logo"/>
                        <span >Home</span>
                        </Link>
                        </li>
                    <li>
                        <Link to="/teams">Teams</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}