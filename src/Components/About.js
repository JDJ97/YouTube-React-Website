import React from "react"
import Poonam from "./Images/PoonamImg.png"
import "./About.css"
const About = () =>{
    return(
        <section className="aboutContainer">
           <h1>About Us</h1> 
           <ul>
               <li className="card"><h3>Yashiry Azize</h3></li>
               <li className="card">
                   <h3>Poonam Dass</h3>
                   <img src={Poonam} alt="Headshot of Poonam" />
                   <a href="https://github.com/PoonamDass">Github</a>
                   <p>Software engineer in the making with a passion for immigrant justice. </p>                   <div>    
                   <p> My favorite part of Youtube is honestly the RickRolld' videos. Rick Astley is forever a legend.</p>
                   <img src="https://media4.giphy.com/media/Ju7l5y9osyymQ/200.gif" alt="You just got Rick Rolld!" />
                   </div>
               </li>
               <li className="card" ><h3>Jailene DeVine-Jones</h3></li>
           </ul>

        </section>

    )

}

export default About