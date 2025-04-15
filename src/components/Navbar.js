import React, { useState } from 'react';
import PropTypes from 'prop-types'




export default function Navbar(props) {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = 'gray';
            
            
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
           
        }
    }
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">TextMAN</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/About">{props.aboutText}</a>
            </li>
            </ul>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"  onClick={props.toggleMode} />
            <label className="form-check-label"  htmlfor="switchCheckDefault">{setMode}</label>
        </div>
        </div>
        </div>
    </nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Home',
    aboutText: 'Contact US'
}
