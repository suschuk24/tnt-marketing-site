import React, {useRef} from "react";
import useVideoElement from "../../hooks/useVideoPlayer";
import './Video.css'
import pause from '../../assets/video-buttons/pause-regular-24.png'
import play from '../../assets/video-buttons/play-regular-24.png'

type Props = {
    video: any
}

const Video: React.FC<Props> = ({video}) => {
    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
    } = useVideoElement(videoElement);

    return (
        <section className="container">
            <div className="video-wrapper">
                <video
                    src={video}
                    ref={videoElement}
                    onTimeUpdate={handleOnTimeUpdate}
                />
                <div className="controls">
                    <div className="actions">
                        <button onClick={togglePlay}>
                            {!playerState.isPlaying ? (
                                <img src={play} alt='play'/>
                            ) : (
                                <img src={pause} alt='pause'/>
                            )}
                        </button>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={playerState.progress}
                        onChange={(e) => handleVideoProgress(e)}
                    />
                    <select
                        className="velocity"
                        value={playerState.speed}
                        onChange={(e) => handleVideoSpeed(e)}
                    >
                        <option value="0.50">0.50x</option>
                        <option value="1">1x</option>
                        <option value="1.25">1.25x</option>
                        <option value="2">2x</option>
                    </select>
                    <button className="mute-btn" onClick={toggleMute}>
                        {!playerState.isMuted ? (
                            <i className="bx bxs-volume-full"/>
                        ) : (
                            <i className="bx bxs-volume-mute"/>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Video
