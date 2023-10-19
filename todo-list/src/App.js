import logo from './images/Logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="utad-logo-container">
        <img  
          className={"u-tad-logo"}
          src={logo}
          alt="Logo de u-tad" />
      </div>
      </header>
    </div>
  );
}

export default App;
