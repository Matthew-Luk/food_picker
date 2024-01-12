import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
// import Header from './Components/Header';
// import Main from './Components/Main';
import Navbar from './Components/Navbar';
import EggsNoodles from './Components/EggsNoodles';
import { useState } from 'react';

function App() {
  const [ eggs, setEggs ] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          {/* <Route path='/home' element={<Home/>}/> */}
          <Route path='/home' element={<Page1/>}/>
          <Route path='/page2' element={<Page2 setEggs={setEggs}/>}/>
          <Route path='/eggs_noodles' element={<EggsNoodles eggs={eggs}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
