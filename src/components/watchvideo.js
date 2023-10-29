import React, { useEffect, useRef, useState } from "react";
import Navbar from "./partials/navbar";
import Posterlist from "./partials/posterlists";
import Programs from "./partials/programs";
import Hls from "hls.js";
import Utvlogo from './images/utvlogo.svg'
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle"; // Import Bootstrap JavaScript
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Watchvideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hidePlayButton, sethidePlayButton] = useState(true);
  const [videoUrlfetched, setvideoUrlfetched] = useState(false);
  const [fullscreen, setfullscreen] = useState(false);
  const { username, videoid } = useParams();
  const handlePlayButtonClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play().catch((error) => {
        console.error("Error playing the video:", error);
      });
      setIsPlaying(true);
      sethidePlayButton(true)
    } else {
      video.pause();
      setIsPlaying(false);
      sethidePlayButton(false)
    }
  };

  const enterFullscreen = () => {
    const video = videoRef.current;
    setfullscreen(true)
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    setfullscreen(false)
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const videoUrl = 'https://epg.provider.plex.tv/library/parts/5e20b730f2f8d5003d739db7-5fc70600dd53a6002d8f93ca/variant.m3u8?url=f4dd433cdc25c0b1c0bae4b63beaa6e5-b9a1abadbd55ab522059752d16645fc1456185517b6bf572fe14e35f4727fb13034e4134dc5e7902009688a34687457d8c274a338faecae8253de6ea4525817535f8e84004c09c5d12f6616c0c2c04c8156f2dfbe2085b494ad3b3b3c3c9bee23dfc48606ecb00a5630815cb79a5e3eea6dcb95bfc92f27f83a07aa99f28ba87e1e6502d597325e3fad664ede6fc0a963e351eb19ffae6f2c2827c32b7b4b140&x-plex-token=i4vRRQJ8VJvESwrsQ4zz&x-plex-advertising-identifier=&x-plex-advertising-donottrack=0&x-plex-provider-streaming-start=1698588685';
    const fetchUrl = async () => {
      try {
        const response = await axios.get(videoUrl); // Replace with your API endpoint
        const data = response;
        // console.log(data)
        if (response.status === 200) {
          setvideoUrlfetched(true);
          console.log(response);
        } else {
          setvideoUrlfetched(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error or set an error state here if needed.
      }
    };
    
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(
        videoUrl
      ); // Replace with your video source URL
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src =
        videoUrl; // Replace with your video source URL
    }
    var interval  = setInterval(() => {
      fetchUrl();
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="row" style={{ width: "100%", margin: "0 auto",marginTop:'100px' }}>
        <div
          className="col-12"
          style={{ height: "8%", margin: "0 auto", width: "100%" }}
        >
          <div
            className="row shadowBackground"
            style={{ marginBottom: "15px" }}
          >
            <div className="col-3">
              <img
                src={videoUrlfetched?"https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fimages%2Fott_channels%2Farts%2FUsWeeklyTV_artwork_horizontal.jpg":Utvlogo}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "100%",
                  marginBottom: "10px",
                }}
              />
            </div>
            <div className="col-8">
              <h2 style={{ fontWeight: "900",fontSize: "25px", }}>Us Weekly TV</h2>
              <h3>
                {!videoUrlfetched?<span
                  style={{ fontSize: "15px", color: "white", fontWeight: "400" }}
                >
                  offline <i class="bi bi-circle-fill"></i>
                </span>:<span
                  style={{ fontSize: "15px", color: "red", fontWeight: "400" }}
                >
                  live <i class="bi bi-circle-fill"></i>
                </span>}
                
              </h3>
            </div>
          </div>
          <div
            className="video-container"
            style={{ position: "relative", width: "98%",margin:'0 auto' }}
          >
            <div className="carousel-overlay" style={{display:!videoUrlfetched?'block':'none',textAlign:'center'}}>
              <p style={{color:'#ffffff',fontSize:'30px',marginTop:'',padding:'40px'}}>Network Connecting...</p>
            </div>
            <video
              onClick={handlePlayButtonClick}
              ref={videoRef}
              poster={videoUrlfetched?"https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fimages%2Fott_channels%2Farts%2FUsWeeklyTV_artwork_horizontal.jpg":Utvlogo} // Replace with the URL of your video poster
              style={{ width: "100%",height:'40%'}}
            >
              <source
                src="https://example.com/your-video-source.m3u8" // Replace with your video source URL
                type="application/x-mpegURL"
              />
              Your browser does not support the video tag.
            </video>
            <div
              className={`play-button${isPlaying ? " playing" : ""}`}
              onClick={handlePlayButtonClick}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1, // Add this to ensure the button appears above the video
              }}
            >
              <i
                style={{
                  color: "#ffffff",
                  fontSize: "35px",
                  background: "rgb(206, 25, 137)",
                  borderRadius: "100%",
                  padding: "13px 20px",
                  display: !hidePlayButton ? "block" : "none",
                }}
                className={`bi ${isPlaying ? "bi-pause" : "bi-play"}`}
              ></i>

            </div>
              <i onClick={enterFullscreen} className={`bi bi-arrows-fullscreen fullscreen-icon`} style={{fontSize:'15px'}}></i>
          </div>
          <div className="col-7 mt-3" style={{margin:'15px'}}>
            {!videoUrlfetched?'':<Link
              to="#"
              onClick={handlePlayButtonClick}
              className="watchbutton"
              style={{
                fontSize: "17px",
                borderRadius: "3px",
                textAlign: "center",
                margin:'0 auto',
                marginTop:'10px',
              }}
            >
              {isPlaying ? (
                <i
                  className="bi bi-pause"
                  onClick={handlePlayButtonClick}
                  style={{ color: "#ffffff", fontSize: "17px" }}
                ></i>
              ) : (
                <i
                  className="bi bi-play"
                  onClick={handlePlayButtonClick}
                  style={{ color: "#ffffff", fontSize: "17px" }}
                ></i>
              )}
              {isPlaying ? "Pause" : "Watch Now"}
            </Link>}
            
          </div>
        </div>
        <div className="col-12 mt-5" style={{ margin: "0 auto", width: "97%" }}>
          <div className="row">
            {/* <div className="col-3">
              <img
                src={videoUrlfetched?"https://images.plex.tv/photo?size=medium-240&scale=2&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fimages%2Fott_channels%2Farts%2FUsWeeklyTV_artwork_horizontal.jpg":Utvlogo}
                style={{ width: "180px", height: "110px", borderRadius: "6px" }}
              />
            </div> */}
            <div className="col-11" style={{width:'98%'}}>
              <div className="row" style={{ marginLeft: "5px" }}>
                <div className="col-sm-1 border-line"></div>
                <div className="col-11 border-line2">
                  <p style={{ fontSize: "20px",padding:'10px' }}>
                    Us Weekly TV has breaking celebrity news, exclusive
                    interviews and all the stars taking part in fun and
                    revealing Us Weekly games
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Programs />
      {/* <Posterlist /> */}
    </div>
  );
};

export default Watchvideo;
