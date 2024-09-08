import React, { useEffect, useState } from 'react';
import { parseCSVFile } from "../services/csvParser";



export default function Bracket() {
    const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await parseCSVFile('/csv_files/matches.csv');
      setMatches(data); 
    };

    fetchMatches(); 
  }, []); 
  return (
    <>
      {matches.length > 0 ? (
        matches.map((match, i) => {
          const scores = match.Score.split('-');
          return (
            <div className="container" key={i}>
                <div className="team-bracket">
                    <div className="team-name">{match.ATeamID}</div>
                    <div className="score">{scores[0]}</div>
                </div>
                <div className="team-bracket">
                    <div className="team-name">{match.BTeamID}</div>
                    <div className="score">{scores[1]}</div>
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