import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; 
import { useSwipeable } from 'react-swipeable';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Posterlist = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const items = ['News', 'Movie', 'Music'];
  return (
    <div>
        <div className='row shadowBackground shadow' style={{margin:'0 auto'}}>
            <Link className='col-3' style={{margin:'15px'}}>
                <div className="card" style={{ width: '13rem',marginTop:'20px',border:'none' }}>
                <img src="https://images.plex.tv/photo?size=medium-360&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FdIMkXU8wM4fHnjFzBuAnZxohels.jpg" className="card-img-top" alt="Card Image" />
                </div>
            </Link>
            <Link className='col-3' style={{margin:'15px'}}>
                <div className="card" style={{ width: '13rem',marginTop:'20px',border:'none' }}>
                <img src="https://images.plex.tv/photo?size=medium-360&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FfCJx7cCXKOEkmCVIIyP8qk0Pb7Y.jpg" className="card-img-top" alt="Card Image" />
                </div>
            </Link>
            <Link className='col-3' style={{margin:'15px'}}>
                <div className="card" style={{ width: '13rem',marginTop:'20px',border:'none' }}>
                <img src="https://images.plex.tv/photo?size=medium-360&scale=2&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FAm1yFF4Ye0eJ8fd6mK7HAvHt3FE.jpg" className="card-img-top" alt="Card Image" />
                </div>
            </Link>
        </div>
    </div>
  );
};

export default Posterlist;
