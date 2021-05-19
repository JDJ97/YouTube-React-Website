import axios from "axios"
import {useEffect, useState} from "react"
import "./Home.css"

const Home = () => {
    const [videos, setVideos] = useState([])

    const FetchVideos = async () => {
        try {
           const res = await axios.get("") 
        } catch (error) {
            setVideos([])
        }
    }

    useEffect(() => {
        FetchVideos()
    }, [])

    return (
        <section className="homeContainer">
            <form>
                <input/>
                <button>Submit</button>
            </form>

        </section>
    )
}

export default Home