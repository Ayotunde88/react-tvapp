import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; 
import { useSwipeable } from 'react-swipeable';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const items = ['News', 'Movie', 'Music'];

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
  });
  const handleSwipe = (direction) => {
    // Handle swipe event, e.g., change the active slide
    console.log(`Swiped ${direction}`);
  };
  return (
    <div>
        <div className='row mt-5' {...handlers} style={{margin:'30px'}}>
            <Link className='col-5 news' style={{ margin: '10px',textDecoration:'none' }}>
            <i className="bi bi-newspaper" style={{color:'#ffffff',fontSize:'70px'}}></i><h2>News</h2>
            </Link>
            <Link className='col-5 movie' style={{ margin: '10px',textDecoration:'none' }}>
            <i className="bi bi-camera-reels" style={{color:'#ffffff',fontSize:'70px'}}></i><h2>Movie</h2>
            </Link>
            <Link className='col-5 music' style={{ margin: '10px',textDecoration:'none' }}>
            <i className="bi bi-boombox" style={{color:'#ffffff',fontSize:'70px'}}></i><h2>Music</h2>
            </Link>
            <Link className='col-5 kids' style={{ margin: '10px',textDecoration:'none' }}>
            <i className="bi bi-android" style={{color:'#ffffff',fontSize:'70px'}}></i><h2>Kids</h2>
            </Link>
        </div>
    </div>
  );
};

export default Categories;
