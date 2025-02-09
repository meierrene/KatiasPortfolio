import { useTranslation } from "react-i18next";
import "./Testimonials.css";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonialsData = t("testimonials.testimonials", {
    returnObjects: true,
  });

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="h2-title">{t("testimonials.title")}</h2>
      <div className="grid-testimonials">
        {testimonialsData.map((testimonial, i) => (
          <div key={i} className="card">
            <h3 className="h3-title">{testimonial.name}</h3>
            <p className="description">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
