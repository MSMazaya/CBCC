import './App.css';
import './preevent.css';
import Navbar from "./components/Navbar"
import Mainpage from "./components/Mainpage"
import {Route, Switch, useLocation} from "react-router-dom"
import Preevent from './components/Preevent';
import {AnimatePresence} from 'framer-motion'
function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Navbar location={location}/>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/preevent">
            <Preevent/>
          </Route>
          <Route exact path="/">
            <Mainpage/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
