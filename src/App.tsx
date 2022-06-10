import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main><Button>Hello, press me</Button></main>
    </div>
  );
}

export default App;
