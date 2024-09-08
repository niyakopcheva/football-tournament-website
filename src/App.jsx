
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MatchDetails from './components/MatchDetails';
import TeamDetails from './components/TeamDetails';


function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/match' element={<MatchDetails />} />
      <Route path='/team' element={<TeamDetails />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
