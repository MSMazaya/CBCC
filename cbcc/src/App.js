import './App.css';
import Header from "./components/Header"
import Events from "./components/Events"
import Timeline from "./components/Timeline"
import Subheader from './components/Subheader'
import Footer from "./components/Footer"
import Faq from "./components/Faq"
import Sponsor from "./components/Sponsor"

function App() {
  return (
    <div className="App">
      <Header/>
      <Subheader/>
      <Events/>
      <Timeline/>
      <Faq/>
      <Sponsor/>
      <Footer/>
    </div>
  );
}

export default App;
