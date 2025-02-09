import "./Header.css";
import { languages } from "../../utils/portfolioData";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { language, changeLanguage } = useLanguage();

  const { t } = useTranslation();

  const selectedLanguage = languages.find((l) => l.title === language);
  const sections = t("header", { returnObjects: true });

  const closeNavbar = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-container">
      <a className="navbar-brand logo-name" href="#">
        <img className="logo" src="logo.svg" />
        <span>Kátia Diniz Meier</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {sections.map((s) => (
            <li key={s.title} className="nav-item">
              <a className="nav-link" href={"#" + s.ref} onClick={closeNavbar}>
                {s.title}
              </a>
            </li>
          ))}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedLanguage && (
                <img src={selectedLanguage.flag} alt={selectedLanguage.title} />
              )}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {languages.map((l) => (
                <li key={l.title}>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      changeLanguage(l.title);
                      closeNavbar();
                    }}
                  >
                    <img src={l.flag} alt={l.title} />
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
