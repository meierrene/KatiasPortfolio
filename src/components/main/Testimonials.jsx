import "./Testimonials.css";
import { testimonialsData } from "../../utils/portfolioData";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="h2-title">What Our Patients Say</h2>
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
