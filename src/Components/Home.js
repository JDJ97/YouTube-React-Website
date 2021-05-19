import axios from "axios"
import {useEffect, useState} from "react"
import "./Home.css"

const Home = () => {
    const [videos, setVideos] = useState([])

    const FetchVideos = async () => {
        try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=player&id=aqz-KE-bpKQ&key=AIzaSyAQv4WQq76MzwsBnlmtlhujCeP4Ph2qlC8`)
        debugger
           console.log(res.data.player)
           setVideos(res.data.items[0].player.embedHtml)
        } catch (error) {
            setVideos([])
        }
    }

    useEffect(() => {
        FetchVideos()
    }, [])

    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    return (
        
        <section className="homeContainer">
            <form onSubmit={handleSubmit}>
                <input/>
                <button>Submit</button>
            </form>
          {/* {videos} */}
          <iframe width="480" height="270" src="//www.youtube.com/embed/aqz-KE-bpKQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Bunny" allowfullscreen></iframe>

        </section>
    )
}

export default Home