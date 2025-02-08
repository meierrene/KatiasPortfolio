import "./AboutMe.css";
import { aboutMeData } from "../../utils/portfolioData";

function AboutMe() {
  return (
    <section className="aboutMe" id="about">
      <h2 className="title">About Me</h2>
      <div className="grid-about-me">
        {aboutMeData.map((item, i) => (
          <div
            key={i}
            className={`${"row"} ${i % 2 === 0 ? "" : "row-reverse"}`}
          >
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
