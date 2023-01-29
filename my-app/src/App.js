import logo from './logo.svg';
import MakeURL from './components/MakeURL';
import './App.css';
import TagsInputs from "./components/TagsInputs"

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Ingredients: <TagsInputs/>
          <MakeURL/>
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
