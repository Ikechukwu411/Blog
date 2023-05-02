import "bulma/css/bulma.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Gist from "./Pages/Gist";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/gist" element={<Gist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
