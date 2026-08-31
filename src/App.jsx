import MainMenu from "./screens/MainMenu";
import DayOne from "./game/Dayone";
import DayTwo from "./game/Daytwo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
      <Routes>
        <Route path="/Day1" element={<DayOne />} />
      </Routes>
      <Routes>
        <Route path="/Day2" element={<DayTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
