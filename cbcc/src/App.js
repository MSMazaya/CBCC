import './App.css';
import Navbar from "./components/Navbar"
import Mainpage from "./components/Mainpage"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"

function App() {
  const events = document.getElementsByClassName("events"); 
  const scroll = () => events.scrollIntoView();
  return (
    <div className="App">
      <Navbar scroll={scroll}/>
      <Router>
        <Route path="/" exact component={Mainpage}/>
        
      </Router>
    </div>
  );
}

export default App;
