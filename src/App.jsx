import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="homePage">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
