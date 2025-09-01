import "./App.css";
import MinecraftStatus from "./components/MinecraftStatus";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MinecraftStatus />
      </header>
    </div>
  );
}

export default App;
