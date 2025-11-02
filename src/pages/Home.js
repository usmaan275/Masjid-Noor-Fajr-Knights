import { Link } from "react-router-dom";

function Home() {
  // Create an array of 3 days dynamically
  const days = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
  <div className="home-container">
  <header className="home-header">
  <h1 className="home-title">🏰 Fajr Knights Programme</h1>
  <h2 className="home-subtitle">Masjid Noor, Luton</h2>
  </header>

    <div className="home-grid">
      {days.map((day) => (
        <Link key={day} to={`/day${day}`} className="home-card">
          Day {day}
        </Link>
      ))}
    </div>
  </div>


  );
}
export default Home;