import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { parseCSVFile } from "../services/csvParser";
import getTeamName from "../queries/getTeamName";
import TeamFormation from "./TeamFormation";

export default function MatchDetails() {
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [matches, setMatches] = useState([]);
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const { matchID } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [playersData, teamsData, matchesData, recordsData] = await Promise.all([
                    parseCSVFile('/csv_files/players.csv'),
                    parseCSVFile('/csv_files/teams.csv'),
                    parseCSVFile('/csv_files/matches.csv'),
                    parseCSVFile('/csv_files/records.csv')
                ]);

                setPlayers(playersData);
                setTeams(teamsData);
                setMatches(matchesData);
                setRecords(recordsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const currentMatch = matches.find(match => match.ID === matchID);

    if (!currentMatch) {
        return <div>No match found for ID: {matchID}</div>;
    }

    const scores = currentMatch.Score.split('-');

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="match-container">
                    <h1>Match Details</h1>
                    <div className="match-result">
                        <div className="team-name" id="teamA">{getTeamName(teams, currentMatch.ATeamID)}</div>
                        <span className="score">{scores[0]} - {scores[1]}</span>
                        <div className="team-name" id="teamB">{getTeamName(teams, currentMatch.BTeamID)}</div>
                    </div>
                </div>
                <div className="formation-container">
                    {<TeamFormation match={currentMatch} teams={teams} teamID={currentMatch.ATeamID}/>}
                    {<TeamFormation match={currentMatch} teams={teams} teamID={currentMatch.BTeamID}/>}
                </div>
            </div>
        </>
    );
}
