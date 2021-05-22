import React from "react";
import Poonam from "./Images/PoonamImg.png";
import "./About.css";
import Yashi from "./Images/YashiryImg.png";

const About = () => {
  return (
    <section className="aboutContainer">
      <h1>About Us</h1>
      <div className="description">
        <h3> Project Description </h3>
        <p>
          {" "}
          A simple Youtube website clone, where a user can search for a topic,
          select a video that uses the Youtube API and will open a new page that
          displays the selected video. User can also view the creators bio and
          the project description.{" "}
        </p>
      </div>
      <ul>
        <li className="card">
          <h3>Yashiry Azize</h3>
          <img src={Yashi} alt="YashiPic" height="220px" />
          <a href="https://github.com/yashiazize">Github</a>
          <p>
            Software engineer with an unquenchable curiosity to learn. Hobbies
            includes drawing, watching movies, and gaming. I am passionate about
            sharing ideas and stories through the utilization of gaming,
            illustrations and other media technologies
          </p>
          <p>
            According to my screen time daily average, I spend 2hrs a day on
            Youtube. During that time, I enjoy watching walkthroughs of scary
            games
          </p>
        </li>
        <li className="card">
          <h3>Poonam Dass</h3>
          <img src={Poonam} alt="Headshot of Poonam" />
          <a href="https://github.com/PoonamDass">Github</a>
          <p>
            Software engineer in the making with a passion for immigrant
            justice.{" "}
          </p>{" "}
          <div>
            <p>
              {" "}
              My favorite part of Youtube is honestly the RickRolld' videos.
              Rick Astley is forever a legend.
            </p>
            <img
              src="https://media4.giphy.com/media/Ju7l5y9osyymQ/200.gif"
              alt="You just got Rick Rolld!"
            />
          </div>
        </li>
        <li className="card">
          <h3>Jailene DeVine-Jones</h3>
        </li>
      </ul>
    </section>
  );
};

export default About;
