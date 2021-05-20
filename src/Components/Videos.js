import React, { useState, useEffect } from "react"
import axios from "axios"
const Video = (props) => {
    const [video, setVideo] = useState([])
    const fetchVideo = async () =>{
        try {
            const { id } = props.match.params
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_API_KEY}`)
            console.log(res)
        } catch (error) {
            setVideo([])
        }
    }
   useEffect(() => {
        fetchVideo()
    }, [])
    const goBack = () => {
        props.history.goBack();
    }
    return (
        <section>
            <button onClick={goBack}>Return</button>
        </section>
    )
}
export default Video;
//props that contains videoID
//use id to make video api call