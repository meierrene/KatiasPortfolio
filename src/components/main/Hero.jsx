import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <h1 className="h1-title">
          Welcome to <span className="highlight">Kátia Diniz Meier&apos;s</span>{" "}
          Portfolio
        </h1>
        <p className="description">
          Transforming smiles with excellence in Endodontics.
        </p>
      </div>
      <img className="hero-pic" src={"./img/hero.jpeg"} alt="Hero" />
    </section>
  );
}

export default Hero;
