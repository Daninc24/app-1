import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'gray';
        document.body.style.color = 'white';
        document.title = "Dark Mode";
        
    }
    
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.title = "Light Mode";
    }
}
  return (
    <>
      <Navbar title = "Home" aboutText = "About us" mode = {mode} toggleMode = {toggleMode} /> 
    <Router>
    <div className='container my-3'>
        <Switch> 
          <Route exact path = "/">
              <Textform heading = "Enter the text to analyze below" mode = {mode}/>
          </Route>
          <Route exact path = "/About"> 
            <About/>
          </Route>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </Switch>
      </div>
    </Router>
     
    </>
  );
}

export default App;
