import "./Testimonials.css";
import { testimonialsData } from "../../utils/portfolioData";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="title">What Our Patients Say</h2>
      <div className="grid-testimonials">
        {testimonialsData.map((testimonial, i) => (
          <div key={i} className="card">
            <h3 className="name">{testimonial.name}</h3>
            <p className="message">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
