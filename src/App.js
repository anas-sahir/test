import './App.css';
import ToggleDarkMode from "./components/toggleDarkMode";
import Background  from "./components/background";

function App() {
  return (
    <div className="App" >
      <Background/>
      <header className="App-header">
        <ToggleDarkMode />
      </header>
    </div>
  );
}

export default App;
