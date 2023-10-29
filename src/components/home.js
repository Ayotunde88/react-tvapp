import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JavaScript
import Navbar from './partials/navbar';
import Categories from './partials/categories';
import Posterlist from './partials/posterlists';
import Slider from './partials/sliders'
import { Link } from 'react-router-dom';
const Homepage = () => {
  return (
    <div className='body'>
        <Navbar/>
        <Slider/>
        {/* <div className='row' style={{margin:'0 auto',width:'100%',marginTop:'20px'}}>
          <div className='col-6' style={{textAlign:'left',fontSize:'25px',fontWeight:'600',color:'#FFFFFF'}}><i className="bi bi-category" style={{color:'#ffffff',fontSize:'70px'}}></i>Category</div>
          <div className='col-6' style={{textAlign:'right'}}><Link className='sliderLinks' style={{textDecoration:'none',color:'#ffffff',fontSize:'20px',padding:'10px 20px',borderRadius:'50px'}}>View All</Link></div>
        </div> */}
        <Categories/>
        <Posterlist/>
    </div>
  );
};

export default Homepage;
