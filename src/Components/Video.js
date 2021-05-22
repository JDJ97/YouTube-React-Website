import React, { useState } from "react";
import { useParams } from "react-router-dom"
import YouTube from 'react-youtube';

const Video = (props) => {
  const [input, setInput] = useState("")
  const { id } = useParams()


  const goBack = () => {
    props.history.goBack();
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  } 

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (e) => {
    e.target.pauseVideo();
  }


  return (
      
    <section>
      <button onClick={goBack}>Return</button>
        <YouTube videoId={id} opts={opts} onReady={_onReady} />
        <h2>Comments</h2>
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleChange}/>
        </form>
    </section>
  );
};

export default Video;
