import React from 'react'
import MainPage from './Components/Navbar'
import MainStructure from './Components/MainStructure'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Concerts from './Components/Concerts';
import Sports from './Components/Sports';

export default function App() {
  return (
    <div>
      
      
      <Router>
      <MainPage/>
      <Routes>
        <Route path='' Component={MainStructure}/>
        <Route path='/concerts' Component={Concerts}/>
        <Route path='/sports' Component={Sports}/>
      </Routes>

      </Router>
    </div>
  )
}
