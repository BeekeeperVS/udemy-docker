import logo from './logo.svg';
import axios from "axios";
import './App.css';

function App() {
  const makeApiRequest = () => {
    console.log('makeApiRequest');
    axios.get("/auth/api/currentUser").then(response => {
        console.log(response.data);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={makeApiRequest}>Make api request</button>
      </header>
    </div>
  );
}

export default App;
