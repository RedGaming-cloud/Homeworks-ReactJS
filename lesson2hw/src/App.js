import './App.css';
import {useMessageList} from './hooks.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Lesson 2 HomeWork</p>
        {useMessageList()}
      </header>
    </div>
  )
}

export default App;

