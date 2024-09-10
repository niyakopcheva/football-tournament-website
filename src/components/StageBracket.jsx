import { useEffect, useState } from "react";
import MatchBracket from "./MatchBracket";
import {parseCSVFile} from "../services/csvParser"


export default function StageBracket({title}) {
    const [matches, setMatches] = useState([]);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
      // Fetch matches data
      const fetchMatches = async () => {
          try {
              const matchesData = await parseCSVFile('/csv_files/matches.csv');
              setMatches(matchesData);
          } catch (error) {
              console.error('Error fetching matches:', error);
          }
      };

      // Fetch teams data
      const fetchTeams = async () => {
          try {
              const teamsData = await parseCSVFile('/csv_files/teams.csv'); 
              setTeams(teamsData);
          } catch (error) {
              console.error('Error fetching teams:', error);
          }
      };

      fetchMatches();
      fetchTeams();
  }, []);

  switch (title) {
    case "Round of 16":
        return (
            <div className="bracket-column">
                <h2>Round of 16</h2>
                <div className="matches">
                    {matches.length > 0 ? (
                        matches
                            .filter((match) => {
                                const [month, day, year] = match.Date.split('/');
                                const matchDate = new Date(`${year}-${month}-${day}`);
                                const lastGroupDate = new Date('2024-06-26');
                                return matchDate > lastGroupDate;
                            })
                            .slice(0, 8)
                            .map((match, i) => (
                                <MatchBracket
                                    key={i} // key prop for React's reconciliation
                                    match={match} // pass match data
                                    teams={teams} // pass list of teams
                                    index={i} // optional index prop
                                />
                            ))
                                
                    ) : (
                        <div>No matches found for the Round of 16.</div>
                    )}
                </div>
                
            </div>
        );

    case "Quarter-finals":
        return (
            <div className="bracket-column">
                <h2>Quarter-finals</h2>
                <div className="matches">
                    {matches.length > 0 ? (
                        matches
                            .filter((match) => {
                                const [month, day, year] = match.Date.split('/');
                                const matchDate = new Date(`${year}-${month}-${day}`);
                                const lastGroupDate = new Date('2024-06-26');
                                return matchDate > lastGroupDate;
                            })
                            .slice(9, 13)
                            .map((match, i) => (
                                <MatchBracket
                                    key={i} // key prop for React's reconciliation
                                    match={match} // pass match data
                                    teams={teams} // pass list of teams
                                    index={i} // optional index prop
                                />
                            ))
                                
                    ) : (
                        <div>No matches found for the Quarter-finals.</div>
                    )}
                </div>
                
            </div>
        );

    case "Semi-finals":
        return (
            <div className="bracket-column">
                <h2>Semi-finals</h2>
                <div className="matches">
                    {matches.length > 0 ? (
                        matches
                            .filter((match) => {
                                const [month, day, year] = match.Date.split('/');
                                const matchDate = new Date(`${year}-${month}-${day}`);
                                const lastGroupDate = new Date('2024-06-26');
                                return matchDate > lastGroupDate;
                            })
                            .slice(13, 15)
                            .map((match, i) => (
                                <MatchBracket
                                    key={i} // key prop for React's reconciliation
                                    match={match} // pass match data
                                    teams={teams} // pass list of teams
                                    index={i} // optional index prop
                                />
                            ))
                                
                    ) : (
                        <div>No matches found for the Semi-finals.</div>
                    )}
                </div>
                
                </div>
        );

    case "Final":
        return (
            <div className="bracket-column">
                <h2>Final</h2>
            <div className="matches">
            {matches.length > 0 ? (
                <MatchBracket
                    key={0} 
                    match={matches[matches.length - 1]} 
                    teams={teams} 
                    index={0} 
                />
            ) : (
                <div>No matches found for the Final.</div>
            )}
            </div>
            
            </div>
        );

    default:
        return(
            <>
            <div>Error when loading data...</div>
            </>
        );
}
}