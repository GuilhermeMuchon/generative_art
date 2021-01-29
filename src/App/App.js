import './App.css';
import Info from '../Info/Info.js';
import Sketches from '../Sketches/Sketches.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Muchon's Generative Art Expo
        </p>
      </header>
      <Info/>
      <Sketches></Sketches>
      <footer className="App-footer">
        <a target="_blank" href="https://guilhermemuchon.github.io" rel="noreferrer">About me</a>
      </footer>
    </div>
  );
}

export default App;
