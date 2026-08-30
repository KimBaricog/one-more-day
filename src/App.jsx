import MainMenu from "./screens/MainMenu";
import LoadingScene from "./components/LoadingScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingScene />} />
      </Routes>
      <Routes>
        <Route path="/MainMenu" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
