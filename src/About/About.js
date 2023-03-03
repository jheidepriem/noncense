import Header from "../Header/Header";
import "./About.css";

const About = () => {
  return (
    <main className="about-me">
      <Header />
      <section className="button-container">
        <button className="button" role="button">
          Let's Go!
        </button>
      </section>
      <h2 className="welcome-title">Welcome to Non.cense</h2>
      <section className="text-container">
        <p className="about-text">
          According to Pen.org, between July1, 2021 - June 30, 2022, the state
          of Texas banned 801 books in 22 districts, making it the highest state
          in America. Of those, prominent themes include subjects such as race
          or racism, LGBTQ+, protagonist or prominent characters of color,
          sexual content, stories of religious minorities and themes of civil
          rights or activism.
        </p>
      </section>
      <img className="map-image" src="map.png" alt="Map image" />
      <p className="about-text-2">
        Non.cense provides a library of the most banned books in the state of
        Texas. Feel free to borrow any of the available books online from
        openlibrary.org
      </p>
    </main>
  );
};
export default About;
