import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*
  Install to run app:
  - npm install react-router-dom@6
  - axios
*/
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import Destinations from "./views/Destinations";
import Weather from "./views/Weather";
import Contact from "./views/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="weather" element={<Weather />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
