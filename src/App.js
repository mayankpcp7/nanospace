import "./App.css";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import MilitaryActions from "./components/MilitaryActions";
function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Explore />
      <MilitaryActions/>
    </div>
  );
}

export default App;
