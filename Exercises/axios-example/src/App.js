import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Create1 from './Components/create/create'
import Read1 from './Components/read/read'
import Update1 from './Components/update/update'
const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create1/>}/>
        <Route path='/read' element={<Read1/>}/>
        <Route path='/update' element={<Update1/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;