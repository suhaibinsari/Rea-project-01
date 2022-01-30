import React from 'react';
import './nav.css'
import logo from '../../assets/main-Logo.png'

export default function Header() {
  return (
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="no-img" />   </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active me-5" aria-current="page" href="#">Home</a>
            </li>
            <li className="justify-content-right">
              <a className="nav-link mb-2 mb-lg-0 me-5  " href="#">About Us</a>
            </li>
            <li className="justify-content-right">
              <a className="nav-link mb-2 mb-lg-0 me-5" href="#">Features</a>
            </li>
            <li className="justify-content-right">
              <a className="nav-link mb-2 mb-lg-0 me-5" href="#">Contact Us</a>
            </li>
          
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-primary me-4" type="submit"> Sign In  </button>
            <button className="btn btn-outline-primary" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </nav>

    )
}
