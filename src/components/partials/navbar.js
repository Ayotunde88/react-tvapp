import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JavaScript
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
          <div className="" style={{width:'100%'}}>
            <div className='row' >
              <div className='col-2'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i className='bi bi-menu navbar-toggler-icon custom-toggler-icon menu-icon' style={{color:'#ffffff'}}></i>
                </button>
              </div>
              <div className='col-2'>
                <h2 style={{color:'#fff',fontSize:'30px',fontWeight:'900'}}>Utv</h2>
              </div>
              <div className='col-8' style={{textAlign:'right'}}>
                <span><i className='bi bi-envelope' style={{color:'#fff',fontSize:'35px'}}></i> <span className='badge'>1</span></span>
              </div>
            </div>
            
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <Link className='links'>Sign In</Link>
                <Link className='links'>Logout <i className='bi bi-box-arrow-right' style={{color:'#fff',fontSize:'17px'}}></i></Link>

              </ul>
            </div>
          </div>
        </nav>

    </div>
  );
};

export default Navbar;
