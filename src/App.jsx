import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./pages/Services";
import StoreProvider from "./components/context/StoreProvider";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <StoreProvider>
    <Router>
      <div className="main-content">
        <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
    </StoreProvider>
  );
}

export default App;
