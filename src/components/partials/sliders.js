import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { URI } from 'tinymce';
// import Slide1 from '../images/Eventsimages/Group 258.png';
// import Slide2 from '../images/Eventsimages/event1.png';
// import Slide3 from '../images/Eventsimages/event2.png';
// import Slide4 from '../images/Eventsimages/event3.png';
// import arrow2 from '../images/svg/arrow2.png'

const Slider = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [loading, setLoading] = useState(true); // Add loading state
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      axios.get(`${backendUrl}/sliderposters`)
      .then(response => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setEvents(response.data);
        } else {
          setEvents([]); // Set events to an empty array when no events are returned
        }
        setLoading(false); // Set loading state to false
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false); // Set loading state to false in case of error
      });
    }, 1000);
  }, []);
  var authToken = localStorage.getItem('authToken')
  // if(authToken==null){
  //   navigate('/login')
  // }
  // else{
  //   navigate('/login')
  // }
  return (
    <div>
      <div className=''>
          { events.length === 0 ? (
          <Carousel style={{ width: '100%', }} className='text-left custom-carousel'>
            <Carousel.Item>
                <img
                src="https://thepopcornscoop.files.wordpress.com/2011/05/improv1.png?w=584"
                alt={''}
                style={{ width: '100%', height: '60%' }}
                />
                <div className="carousel-overlay"></div>
                <Carousel.Caption className="caption-bottom-left" style={{textAlign:'left'}}>
                <h3 className="text-sm text-white text-left">Drew Carey's Improv-A-Ganza</h3>
                <p className="text-sm text-white text-left">Comedy, Game Show</p>
                <Link className='sliderLinks'><i className="bi bi-play fs-4" style={{color:'#ffffff'}}></i>Watch Now</Link>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        ) : (
          <Carousel style={{ width: '100%', height: '40%' }}>
            {events.map(event => (
              <Carousel.Item key={event.id} style={{ width: '100%', height: '40%' }}>
                <img
                src={event.videoPoster}
                alt={''}
                style={{ width: '100%', height: '300px' }}
                />
                <div className="carousel-overlay"></div>
                <Carousel.Caption className="caption-bottom-left" style={{textAlign:'left',marginTop:'-50px'}}>
                <h3 className="text-sm text-white text-left" style={{fontSize:'30px'}}>{event.videoTitle}</h3>
                <p className="text-sm text-white text-left" style={{fontSize:'28px',fontStyle:'italics'}}>{event.genre}</p>
                <Link to={'/watchvideo/Ayotunde/:videoid/'} className='sliderLinks' style={{fontSize:'25px'}}><i className="bi bi-play" style={{color:'#ffffff',fontSize:'25px'}}></i>Watch Now</Link>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Slider;
