# football-tournament-website
 Web application that visualizes the matches and results from the European Football Championship. 

 # Tasks:

 ## 1.Parsing data from csv files
    Created a js function called csvParser. The function receives an argument of the path to the file and fetches it. If the fetch succeeds, the parseCSV function creates an array of objects from the data from the response of the fetch using string manipulation and returns it. 

 ## 2.Homepage
    The homepage presents a bracket view of the matches of the tournament.
    1. Created a Bracket component.
    2. Inside the Bracket component are StageBrackets for every stage of the tournament, for easier visualization.
    3. Every StageBracket fetches the matches and the teams and filters the matches after the group stage, which ends on 6/26/2024. After that, based on the prop title, passed to the StageBracket component, displays the matches from that stage.
    4. The function getTeamName uses the array of teams and the TeamID props to return the name of the team.

## 3.Match Details
    1. Displays the names of the teams and the score.
    2. Using the TeamFormation component display the formation of the teams, filters which players from the team played from the beginning of the match(fromMinutes === '0') and display their names above the positions.

## 4.Team Details
    1.Based on the id parsed as a prop from the url, fetch the players from that team and display their numbers, names and positions.

# Technologies 
    - React Router
    
