import './App.css';
import Home from './components/Home';
import MemoExample from './components/MemoExample';
import Parent from './components/Parent';
import ReducerCounter from './components/ReducerCounter';
import Ref from './components/Ref';

function App() {
  return (
    <div className="App">
      <>
      <ReducerCounter/>
      <Ref/>
      <MemoExample/>
      </>
    </div>
  );
}

export default App;
