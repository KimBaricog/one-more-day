import MainMenu from "./screens/MainMenu";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
