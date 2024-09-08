
import Navbar from "./Navbar";
import Bracket from "./Bracket"
import { parseCSVFile } from "../services/csvParser";

export default function Home() {
    
    return (
        <>
            <Navbar/>
            <h1>Homepage</h1>
            <h1>Bracket View</h1>
            <Bracket />
        </>
    );
}