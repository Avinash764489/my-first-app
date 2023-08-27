import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navebar(props){
    return(
        <div>
            <nav className={`navbar navbar-expand-lg navebar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/" style={{color: props.mode==='dark'?'white':'black'}}>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/" style={{color: props.mode==='dark'?'white':'black'}}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about" style={{color: props.mode==='dark'?'white':'black'}}>{props.abouttext}</Link>
                        </li>
                        {/* <li className="nav-item">
                        <Link className="nav-link" to="/" style={{color: props.mode==='dark'?'white':'black'}}>Contact Us</Link>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                        <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navebar.prototype = {
    title: PropTypes.string.isRequired,
    abouttext: PropTypes.string
}

Navebar.defaultProps = {
    title: 'Set title here',
    abouttext: 'About'
}