import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import {parseCSVFile} from "../services/csvParser"
import PlayerDetails from "./PlayerDetails";
import getTeamName from "../queries/getTeamName";

export default function TeamDetails() {
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);
    const {teamID} = useParams();

    useEffect( () => {
        const fetchPlayers = async () => {
        try {
            const playersData = await parseCSVFile('/csv_files/players.csv'); 
            setPlayers(playersData);
        } catch (error) {
            console.error('Error fetching players:', error);
        }
    };

    const fetchTeams = async () => {
        try {
            const teamsData = await parseCSVFile('/csv_files/teams.csv'); 
            setTeams(teamsData);
        } catch (error) {
            console.error('Error fetching teams:', error);
        }
    };

    fetchPlayers();
    fetchTeams();
    },[])
    const teamName = getTeamName(teams, teamID);

    return (
        <>
        <Navbar />
        <h1>{
            teamName
            }</h1>
        <table className="players">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Player</th>
                    <th>Pos</th>
                </tr>
            </thead>
            <tbody>
                {players.length > 0 ? (
                            players
                                .filter((player) => 
                                    player.TeamID === teamID
                                )
                                .map((player, i) => (
                                    <PlayerDetails
                                        key={i}
                                        number={player.TeamNumber}
                                        fullName={player.FullName}
                                        position={player.Position}
                                    />
                                ))
                                    
                        ) : (
                            <tr>
                                <td colSpan="3">No players found.</td>
                            </tr>
                        )}
            </tbody>
        </table>
        </>
    

    );
    
}