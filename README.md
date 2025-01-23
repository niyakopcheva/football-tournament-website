# Football Tournament Website

Web application visualizing the matches and results from the European Football Championship.

---

## Tasks

### 1. Parsing Data from CSV Files
- Created a `csvParser` function in JavaScript.
- The function receives the path to the CSV file and fetches its data.
- If the fetch succeeds, `csvParser` uses string manipulation to convert the CSV data into an array of objects and returns it.

### 2. Homepage
- The homepage presents a bracket view of the tournament matches.
1. Created a `Bracket` component.
2. Inside the `Bracket` component, `StageBrackets` are used for each tournament stage.
3. `StageBrackets` fetch matches and teams, then filter matches after the group stage (ending on 6/26/2024).  
   Based on the `title` prop passed to `StageBracket`, matches from that stage are displayed.
4. `getTeamName` function retrieves team names using the teams array and the `TeamID` prop.

### 3. Match Details
1. Displays team names and scores.
2. Uses the `TeamFormation` component to show team formations.  
   Filters players who started the match (`fromMinutes === '0'`) and displays their names above their positions.

### 4. Team Details
1. Based on the `id` prop from the URL, fetches the team's players.
2. Displays player numbers, names, and positions.

---

## Technologies
- React Router

