import logo from './logo.png';
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
          {/* <MakeURL/> */}
        </p>
        
      </header>
    </div>
  );
}

export default App;
