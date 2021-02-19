import './App.css';
import './preevent.css';
import Navbar from "./components/Navbar"
import Mainpage from "./components/Mainpage"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Preevent from './components/Preevent';

function App() {
  const events = document.getElementsByClassName("events"); 
  const scroll = () => events.scrollIntoView();
  return (
    <div className="App">
      <Navbar scroll={scroll}/>
      <Router>
        <Route path="/" exact component={Mainpage}/>
        <Route path="/preevent" component={Preevent}/>
      </Router>
    </div>
  );
}

export default App;
