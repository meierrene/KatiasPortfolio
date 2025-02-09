import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p className="footer-copyright">{t("footer", { year })}</p>
    </div>
  );
};

export default Footer;
