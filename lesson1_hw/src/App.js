import logo from './logo.svg';
import './App.css';
import './message.css';
import {Message} from './message.js'
import {Text} from './userText'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>       
        <h4 className="message"> { Message(Text) } </h4>
      </header>
    </div>
  );
}

export default App;
