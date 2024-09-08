export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="/">
                        <img src="/icons/futbol-solid.svg" alt="logo"/>
                        Home</a>
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