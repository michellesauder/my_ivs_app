import './App.css';
import React, { useEffect, useState, useRef } from 'react';

const { IVSPlayer } = window;
console.log(IVSPlayer)

// const {
//   create: createMediaPlayer,
//   isPlayerSupported,
//   PlayerEventType,
//   PlayerState
// } = IVSPlayer;

function App() {

  // console.log(process.env.DEFAULT_PLAYBACK_URL)
  const [playbackUrl, setPlaybackURL] = useState('https://a23cdce897dd.us-west-2.playback.live-video.net/api/video/v1/us-west-2.045801317995.channel.IjS5ODwutv0m.m3u8');

  const videoRef = useRef(null)
  const playerRef = useRef(null)


  const getLiveStream = () => {
    playerRef.current.load(playbackUrl);
    setPlaybackURL("")
  }


  useEffect(() => {
    if (IVSPlayer.isPlayerSupported) {
      playerRef.current = IVSPlayer.create();
      playerRef.current.attachHTMLVideoElement(videoRef.current);
      playerRef.current.load(playbackUrl);
      playerRef.current.play();
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <h3>playback URL</h3>
        <div className="inputs">
          <input 
            onChange={(e) => setPlaybackURL(e.target.value)} 
            style={{width: '100%', height: '40px'}}/>
          <button onClick={getLiveStream}>Load</button>
        </div>
        <video ref={videoRef} />
      </header>
    </div>
  );
}

export default App;
