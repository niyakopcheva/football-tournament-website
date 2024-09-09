export default function getTeamName(teams, teamID) {
    const team = teams.find(team => team.ID === teamID);
    return team ? team.Name : 'Unknown Team'; // Handle case where the team is not found
}