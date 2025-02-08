import "./AboutMe.css";
import { aboutMeData } from "../../utils/portfolioData";

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="h2-title">About Me</h2>
      <div className="grid-about-me">
        {aboutMeData.map((item, i) => (
          <div
            key={i}
            className={`${"row"} ${i % 2 === 0 ? "" : "row-reverse"}`}
          >
            <div className="text">
              <h3 className="h3-title">{item.title}</h3>
              <p className="description">{item.description}</p>
            </div>
            <div className="image-about-me">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
