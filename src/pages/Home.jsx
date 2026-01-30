import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">All-in-One React App</h1>
      <p className="home-subtitle">Mini apps showcase</p>

      <div className="home-grid">
        <Link to="/calculator" className="home-box">🧮 Calculator</Link>
        <Link to="/todo" className="home-box">📝 Todo</Link>
        <Link to="/weather" className="home-box">🌦 Weather</Link>
        <Link to="/clock" className="home-box">⏰ Clock</Link>
        <Link to="/counter" className="home-box">🔢 Counter</Link>
      </div>
    </div>
  );
}

export default Home;
