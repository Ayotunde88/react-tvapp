import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; 
import { useSwipeable } from 'react-swipeable';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Programs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const items = ['News', 'Movie', 'Music'];
  return (
    <div>
        <div className="row mt-3" style={{margin:'0 auto',width:'92%'}}>
            <h4 className='mt-2'><span><i
                  className="bi bi-clock"
                  style={{ color: "#ffffff", fontSize: "20px" }}
                ></i></span> Programs</h4>
        </div>
        
        <div className="row programlist mt-2 mb-5" style={{margin:'0 auto',width:'92%'}}>
            <div className='col-4 programName'>
                <h4 className='mt-2'>News Hour</h4>
            </div>
            <div className='col-4 programTime'>
                <span>07:00</span> - <span>08:00</span>
            </div>
            <div className='col-4 setReminder'>
                <span><i
                  className="bi bi-clock"
                  style={{ color: "#ffffff", fontSize: "35px" }}
                ></i></span>
            </div>
        </div>
    </div>
  );
};

export default Programs;
