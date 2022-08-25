import { Provider } from 'react-redux';
import store from './components/redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer/>
     <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
