import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/NewRoom" element={<NewRoom/>}/>
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
