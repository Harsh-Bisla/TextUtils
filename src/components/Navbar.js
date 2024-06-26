import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>
          <div className="container-fluid">
            <a className={`navbar-brand text-${props.mode === "light" ? "dark" : "light"}`} to="/">{props.logo}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={`nav-link active text-${props.mode === "light" ? "dark" : "light"}`} aria-current="page" to="/about">About</a>
                </li>
                <li className="nav-item">
                  <a style={{ color: props.mode === "light" ? "black" : "white" }} className="nav-link" to="/">Home</a>
                </li>

              </ul>
              <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
