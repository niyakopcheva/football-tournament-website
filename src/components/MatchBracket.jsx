import { useNavigate } from "react-router-dom";
import getTeamName from "../queries/getTeamName";

export default function MatchBracket({match, teams, index}) {
    const scores = match.Score.split('-');
    const navigate = useNavigate();

    const handleMatchDetailsClick = () => {
        // Navigate to the MatchDetails page with the match ID
        navigate(`/matches/${match.ID}`);
      };

    return (
        <div className="container">
            <div className="team" key={index}>
              <div className="date">{match.Date}</div>
              <div className="team-bracket">
                  <a href={`/teams/${match.ATeamID}`} className="team-name">{getTeamName(teams, match.ATeamID)}</a>
                  <span className="score">{scores[0]}</span>
              </div>
              <div className="team-bracket">
                  <a href={`/teams/${match.BTeamID}`} className="team-name">{getTeamName(teams, match.BTeamID)}</a>
                  <span className="score">{scores[1]}</span>
              </div>
              <button className="primary-button" onClick={handleMatchDetailsClick}>Match details</button>
            </div>
            
        </div>
      );
}