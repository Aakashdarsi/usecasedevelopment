import React from 'react'
import { Link } from 'react-router-dom'
export default function MainPage() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark navbar-fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to=""><span><img src='https://img.freepik.com/free-vector/realistic-illustration-gold-crown-with-red-gems-jewelry-award-royalty_1262-13473.jpg' style={{height:"30px",width:"40px",borderRadius:"20px",marginRight:"10px"}}/></span>Ticket King</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="/events" className='nav-link active'>Notifications <span className='badge text-bg-secondary  rounded-pill bg-danger top-2 start-100'>4</span></Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <select className='form-select'>
            <option value="">Hyderabad</option>
            <option value="">Delhi</option>
            <option value="">Vizag</option>
            <option>Chennai</option>
        </select>
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
