import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import MyCalculator from "./pages/MyCalculator";
import Todo from "./pages/Todo";
import WeatherAlert from "./pages/WeatherAlert";
import Clock from "./pages/Clock.jsx";
import Counter from "./pages/counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<MyCalculator />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/weather" element={<WeatherAlert />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
