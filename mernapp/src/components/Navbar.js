import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';


export default function Navbar() {
  const navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <Link class="navbar-brand fs-1 fst-italic" to="/">FoodiGo</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2">
          <li className='nav_item'>
          <Link class="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>

        {(localStorage.getItem("authToken"))?
        <li className='nav_item'>
        <Link class="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
      </li>
      : ""}
      </ul>

      {(!localStorage.getItem("authToken"))?
      <div className='d-flex'>

          <Link class="btn bg-white text-success mx-1" to="/login">Login</Link>

          <Link class="btn bg-white text-success mx-1" to="/CreateUser">Signup</Link>

      </div>
      : <div>
<div className='btn bg-white text-success mx-2'>
        My Cart{" "}
        <Badge pill bg="danger">2</Badge>
      </div>

      <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
        Logout
      </div>
      </div>
      }
    </div>
  </div>
</nav>
    </div>
  )
}
