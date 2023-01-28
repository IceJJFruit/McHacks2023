import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ingredients: <SearchBar/>
        </p>
        <p>
          Time to make goes here.
        </p>
        <a
          className="App-link"
          href="https://tasty.co/"
        >
          Link to recipe site.
        </a>
      </header>
    </div>
  );
}

export default App;
