export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li>
                        <a className="home" href="/">
                        <img className="svg-icon" src="/icons/futbol-solid.svg" alt="logo"/>
                        <span >Home</span>
                        </a>
                        </li>
                    <li>
                        <a href="/matches">Match Details</a>
                        </li>
                    <li>
                        <a href="/teams">Teams</a>
                    </li>
                </ul>
            </div>
        </>
    );
}