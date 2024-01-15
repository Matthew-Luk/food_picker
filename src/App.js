import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Navbar from './Components/Navbar';
import EggsNoodles from './Components/EggsNoodles';
import { useState } from 'react';
import OrderSleep from './Components/OrderSleep';

function App() {
  const [ eggs, setEggs ] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/page2' element={<Page2 setEggs={setEggs}/>}/>
          <Route path='/page3' element={<Page3/>}/>
          <Route path='/eggs_noodles' element={<EggsNoodles eggs={eggs}/>}/>
          <Route path='/order_sleep' element={<OrderSleep/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
