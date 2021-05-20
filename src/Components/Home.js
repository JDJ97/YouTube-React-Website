import axios from "axios"
import {useState} from "react"
import "./Home.css"
require("dotenv").config()

const Home = () => {
    const [videos, setVideos] = useState([])
    const [showList, setShowList] = useState(false)
    const [input, setInput] = useState("")

    const FetchVideos = async () => {
        try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        debugger
        setVideos(res.data.items)
        } catch (error) {
            setVideos([])
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        FetchVideos()
        setShowList(true)
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        
        <section className="homeContainer">
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleChange}/>
                <button>Submit</button>
            </form>
            {showList ? (
          <ul>
              {videos.map((videoObj) => {
                  return <li key={videoObj.id}> <img alt="thumbnails" src={videoObj.snippet.thumbnails.default.url} /> {videoObj.snippet.title}  </li>
              })}
          </ul> )
         : <ul></ul> }
        </section>
    )
}

export default Home