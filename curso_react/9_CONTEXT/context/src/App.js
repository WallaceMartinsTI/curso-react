import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Context</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
