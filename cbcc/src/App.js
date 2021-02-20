import './App.css';
import './preevent.css';
import './competition.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Mainpage from "./components/Mainpage"
import {Route, Switch, useLocation} from "react-router-dom"
import Preevent from './components/Preevent';
import {AnimatePresence} from 'framer-motion'
import Competition from './components/Competition';
function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Navbar location={location}/>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/preevent" component={Preevent}/>
          <Route path="/competition" component={Competition}/>
          <Route exact path="/" component={Mainpage}/>
        </Switch>
        <Footer/>
      </AnimatePresence>
    </div>
  );
}

export default App;
