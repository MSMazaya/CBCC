import './App.css';
import Header from "./components/Header"
import Events from "./components/Events"
import Timeline from "./components/Timeline"
import Subheader from './components/Subheader'

function App() {
  return (
    <div className="App">
      <Header/>
      <Subheader/>
      <Events/>
    </div>
  );
}

export default App;
