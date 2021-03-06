import './NowHiring.css';
import React from "react";
import Video from "../../components/Video";
const tntVideo = require('../../assets/general/tnt-hiring-video.mp4')

const NowHiring:React.FC = () => {

  return (
    <div id='employment' className='NowHiring-container'>
      <h3 className='NowHiring-title'>Now Hiring</h3>
        <button className='NowHiring-button'>Apply Now</button>
        <Video video={tntVideo} />
    </div>
  );
};

export default NowHiring;
