import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import RouteError from "./components/RouteError/RouteError";

function App() {
  return (
    <div className="homePage">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<RouteError />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
