import logo from './logo.svg';
import './App.css';
import LoginButton from './login';
import Profile from './profile';
import LogoutButton from './logout';

function App() {
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
        <LoginButton></LoginButton>
        <LogoutButton></LogoutButton>
        <Profile></Profile>
      </header>
    </div>
  );
}

export default App;
