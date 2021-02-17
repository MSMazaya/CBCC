import './App.css';
import Header from "./components/Header"
import Events from "./components/Events"
import Timeline from "./components/Timeline"
import Subheader from './components/Subheader'
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Subheader/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
