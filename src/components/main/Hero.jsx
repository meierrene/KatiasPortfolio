import { useTranslation } from "react-i18next";
import "./Hero.css";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="heroContent">
        <h1 className="h1-title">
          {t("hero.title")}
          <br />
          <span className="highlight">Kátia Diniz Meier</span>
        </h1>
        <p className="description">{t("hero.description")}</p>
      </div>
      <img className="hero-pic" src={"./img/hero.jpg"} alt="Hero" />
    </section>
  );
}

export default Hero;
