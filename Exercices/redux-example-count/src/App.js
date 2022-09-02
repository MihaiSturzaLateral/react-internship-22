import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux/es/exports';
import CountContainer from './components/CountContainer';
import store from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CountContainer/>
    </div>
    </Provider>
  );
}

export default App;
