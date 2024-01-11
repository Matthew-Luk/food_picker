import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
// import Header from './Components/Header';
// import Main from './Components/Main';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          {/* <Route path='/home' element={<Home/>}/> */}
          <Route path='/home' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
