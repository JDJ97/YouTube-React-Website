import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./Video.css";

const Video = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentSection, setCommentSection] = useState([])
  const { id } = useParams();

  const goBack = () => {
    props.history.goBack();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentSection(prevCommentSection=> [...prevCommentSection, `${name}: ${comment}`])
    setName("")
    setComment("")
  };

  useEffect(() => {
      localStorage.setItem('store-comment-section', JSON.stringify(commentSection))
  })

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setComment(e.target.value);
    }
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const _onReady = (e) => {
    e.target.pauseVideo();
  };

  return (
    <section className="videoContainer">
      <button onClick={goBack}>Return to Search</button>
      <YouTube videoId={id} opts={opts} onReady={_onReady} />
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name:
          <input type="text" onChange={handleChange} name="name" value={name} />
        </label>
        <label>
          {" "}
          Comment:
          <input
            type="text"
            onChange={handleChange}
            name="comment"
            value={comment}
          />
        </label>
        <button>Comment</button>
      </form>
      <ul>
          {commentSection.map((comment) =>{
              return <li> {comment} </li>
          })}
      </ul>
    </section>
  );
};

export default Video;
