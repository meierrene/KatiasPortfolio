import "./AboutMe.css";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();
  const aboutMeData = t("aboutMe.aboutMe", { returnObjects: true });

  return (
    <section className="about-me" id="about">
      <h2 className="h2-title">{t("aboutMe.title")}</h2>
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
