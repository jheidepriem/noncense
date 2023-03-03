import './About.css'

const About = () => {
  console.log('rendering')
  return (
    <main className="about-me">
       <button>Let's Go!</button>
      <section className="text-container">
      <h2 className="welcome-title">Welcome to Non.cense</h2>
      <p>According to Pen.org, between July1, 2021 - June 30, 2022, 
        the state of Texas banned 801 books in 22 districts, making it 
        the highest state in America.</p>
      </section>
      <img className="map-image" src="map.png" alt="Map image"/>
    </main>
  )
}
export default About;