
import './App.css';
import { Provider } from 'react-redux';
import Store from './reduxContainer/Store';

function App() {
  return (
    <Provider Store={Store} >
      <div className="App">
        <h1>React-Redux tut</h1>
      </div>
    </Provider>
  );
}

export default App;
