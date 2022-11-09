import React from 'react'
import './VideoStory.css'
import { Link } from 'react-router-dom';
const VideoStory = () => {
  return (
    <div className="story-video ">
      <div
        className="story-video--tittle"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        HOW WE MAKE OUR CHEF CRAFTED SNACKS
      </div>
      <div className="video-container--content_main__video">
        <video  autoPlay loop muted>
          <source src="https://cdn.shopify.com/s/files/1/0475/8759/0310/files/Brand_Video.mp4?v=1634628457" />
        </video>
      </div>
      <Link to='/our-process'>
        <button>
          LEARN MORE <span className="arrow"></span>
        </button>
      </Link>
    </div>
  );
}

export default VideoStory