import React from 'react'
export default function Navbar() {
  return (
   <>
   <div className='container-fluid'>
   <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-2">
    <a className="navbar-brand" href="#">ASHUTOSH MISHRA </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul className="navbar-nav nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Skills</a>
        </li>
      </ul>
    </div>
</nav>
   </div>
   </>
  )
}
