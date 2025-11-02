import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MCQ from "./components/MCQ";
import day1Questions from "./data/day1Questions";
import day2Questions from "./data/day2Questions";
import day3Questions from "./data/day3Questions";
import LoadingScreen from "./components/LoadingScreen";
import usePreloadImages from "./hooks/usePreloadImages";
import './App.css';

function App() {
  // If you don't have images yet, just pass an empty array
  const imagesLoaded = usePreloadImages([]);

  // Show loading screen while preloader runs
  if (!imagesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Home / Landing Page */}
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Day x Quiz */}
        <Route
          path="/day1"
          element={<MCQ questions={day1Questions} title="Day 1 Quiz" />}
        />
        <Route
          path="/day2"
          element={<MCQ questions={day2Questions} title="Day 2 Quiz" />}
        />
        <Route
          path="/day3"
          element={<MCQ questions={day3Questions} title="Day 3 Quiz" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
