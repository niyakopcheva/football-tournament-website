
import Navbar from "./Navbar";
import Bracket from "./Bracket"



export default function Home() {
   
    return (
        <>
            <Navbar/>
            <h1>European Football Championship</h1>
            <h1 className="secondary-heading">Bracket View</h1>
            <Bracket/>
        </>
    );
}