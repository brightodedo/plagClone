import './App.css';
import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Mission from '../Mission/Mission';
import Contact from '../Contact/Contact';

export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        {/* a comment starr */}
        <div>
        <Routes>
          {/* Declare individual routes under */}
          <Route path='/' element={< Home/>} />
          <Route path='/mission' element={<Mission/>} />
          <Route path='/contact' element={< Contact/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
      <Footer /> 
      {/* <BrowserRouter>
      <NavBar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound /> } /> 
        </Routes>
      </BrowserRouter> */}

    </div>
  );
}