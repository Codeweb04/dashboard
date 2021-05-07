import './App.css';
import Sidebar from './Components/Sidebar';
import Profile from './Components/Profile';
import Uplessons from './Components/Uplessons';
import Tasks from './Components/Tasks';
import Leaderboard from './Components/Leaderboard';
import MyCourses from './Components/MyCourses';
import HwProgress from './Components/HwProgress';
import Graph from './Components/Graph';


function App(props) {
  return (
    <div className="App">
        <Sidebar />
        <div className="container">
          <Profile uname={props.location.state.uname}/>
          <div className="GridContainer">
            <Uplessons  />
            <Tasks  />
            <Leaderboard  />
            <MyCourses  />
            <HwProgress  />
            <Graph  />
          </div>
        </div>

    </div>
  );
}

export default App;
