import { useEffect, useState } from "react";
import { parseCSVFile } from "../services/csvParser";
import Navbar from "./Navbar";

export default function TeamsList() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        // Fetch teams data
        const fetchTeams = async () => {
            try {
                const teamsData = await parseCSVFile('/csv_files/teams.csv'); 
                setTeams(teamsData);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };
  
        fetchTeams();
    }, []);

    return (
        <>
        <Navbar />
        <div className="teams-container">
        <h1 >Teams</h1>
            <table className="teams">
                <tbody>
                {teams.length > 0 ? (
                                    teams
                                        .map((team, i) => (
                                                <tr key={i}>
                                                    <td>
                                                    <a href={`/teams/${team.ID}`} className="team-name">{team.Name}</a>
                                                    </td>
                                                </tr>
                                            
                                        ))
                                            
                                ) : (
                                    <tr>
                                        <td colSpan="3">No teams found.</td>
                                    </tr>
                                )}
                </tbody>
            </table>
        </div>
        
        </>
    );
}