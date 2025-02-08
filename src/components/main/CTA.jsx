import { useRef } from "react";
import { ctaEmailData } from "../../utils/portfolioData";
import "./CTA.css";

function CTA() {
  const title = useRef();
  const content = useRef();

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
        <h2 className="h2-title">Ready to transform your smile?</h2>
        <p className="description">
          Contact Dr. Kátia Diniz Meier today to schedule an appointment or
          learn more about her services.
        </p>
        <form className="cta-form" onSubmit={submitHandler}>
          <input
            required
            className="cta-box subject"
            type="text"
            placeholder="Subject"
            ref={title}
          />
          <textarea
            required
            className="cta-box content"
            rows="5"
            placeholder="Write your message here..."
            ref={content}
          />

          <div className="button-nav">
            <button className="primaryButton" type="submit">
              Contact Me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CTA;
