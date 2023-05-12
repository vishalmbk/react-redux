
import './App.css';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from './BookContainer';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <h1>React-Redux tut</h1>
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
