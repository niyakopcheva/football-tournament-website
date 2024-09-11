
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MatchDetails from './components/MatchDetails';
import TeamDetails from './components/TeamDetails';

import '../src/css/reset.css'
import '../src/css/styles.css'
import TeamsList from './components/TeamsList';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teams/' element={<TeamsList />} />
          <Route path='/teams/:teamID' element={<TeamDetails />} />
          <Route path='/matches/:matchID' element={<MatchDetails />} />
        </Routes>
    </div>
    
      
  )
}

export default App
