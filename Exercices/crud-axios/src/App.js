import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Update from './components/update/update';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div>

      {/* <Create/>
      <Read/> */}

      <Router>
      <Routes>
      <Route path="/" element={<Header />}  >
      <Route index element={<Create/>} />
      <Route path = 'read' element={<Read/>}/>
      <Route path = 'update' element={<Update/>}/>
      </Route>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
