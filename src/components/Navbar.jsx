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
                        <a href="/match">Match Details</a>
                        </li>
                    <li>
                        <a href="/team">Team Details</a>
                    </li>
                </ul>
            </div>
        </>
    );
}