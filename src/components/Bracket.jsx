import React, { useEffect, useState } from 'react';
import { parseCSVFile } from "../services/csvParser";
import getTeamName from '../queries/getTeamName';

export default function Bracket() {
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
              const teamsData = await parseCSVFile('/csv_files/teams.csv'); // Assuming team data is in a separate file
              setTeams(teamsData);
          } catch (error) {
              console.error('Error fetching teams:', error);
          }
      };

      fetchMatches();
      fetchTeams();
  }, []);

  return (
    <>
      {matches.length > 0 ? (
        matches.map((match, i) => {
          const scores = match.Score.split('-');
          return (
            <div className="container">
                <div className="team" key={i}>
                  <div className="team-bracket">
                      <div className="team-name">{getTeamName(teams, match.ATeamID)}</div>
                      <div className="score">{scores[0]}</div>
                  </div>
                  <div className="team-bracket">
                      <div className="team-name">{getTeamName(teams, match.BTeamID)}</div>
                      <div className="score">{scores[1]}</div>
                  </div>
                </div>
            </div>
            
          );
        })
      ) : (
        <div>Loading...</div> 
      )}
    </>
  );
}