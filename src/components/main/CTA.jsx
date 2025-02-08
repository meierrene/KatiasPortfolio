import "./CTA.css";

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="content">
        <h2 className="title">Ready to transform your smile?</h2>
        <p className="subtitle">
          Contact Dr. Kátia Diniz Meier today to schedule an appointment or
          learn more about her services.
        </p>
        <div className="buttons">
          <button
            className="primaryButton"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Me
          </button>
          <button
            className="secondaryButton"
            onClick={() => (window.location.href = "/services")}
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
