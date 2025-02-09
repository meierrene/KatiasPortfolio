import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Hero.css";

function Hero() {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const usingApos = language.includes("en") ? "'s" : "";
  return (
    <section className="hero">
      <div className="heroContent">
        <h1 className="h1-title">
          {t("hero.title-part1")}
          <br />
          <span className="highlight">{`Kátia Diniz Meier${usingApos}`}</span>
          {t("hero.title-part2")}
        </h1>
        <p className="description">{t("hero.description")}</p>
      </div>
      <img className="hero-pic" src={"./img/hero.jpg"} alt="Hero" />
    </section>
  );
}

export default Hero;
