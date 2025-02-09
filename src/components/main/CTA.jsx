import { useRef } from "react";
import { ctaEmailData } from "../../utils/portfolioData";
import "./CTA.css";
import { useTranslation } from "react-i18next";

function CTA() {
  const title = useRef();
  const content = useRef();

  const { t } = useTranslation();

  const submitHandler = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(title.current.value);
    const body = encodeURIComponent(
      content.current.value.replace(/\n/g, "%0D%0A")
    );
    //mailto:contato@katiadiniz.com.br?subject=Test&body=Another%20test!%0D%0ATest!

    window.open(`mailto:${ctaEmailData}?subject=${subject}&body=${body}`);

    title.current.value = "";
    content.current.value = "";
  };

  return (
    <section className="cta" id="contact">
      <div className="content">
        <h2 className="h2-title">{t("cta.title")}</h2>
        <p className="description">{t("cta.description")}</p>
        <form className="cta-form" onSubmit={submitHandler}>
          <input
            required
            className="cta-box subject"
            type="text"
            placeholder={t("cta.subjectPlaceholder")}
            ref={title}
          />
          <textarea
            required
            className="cta-box content"
            rows="5"
            placeholder={t("cta.textPlaceholder")}
            ref={content}
          />

          <div className="button-nav">
            <button className="primaryButton" type="submit">
              {t("cta.buttonContact")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CTA;
