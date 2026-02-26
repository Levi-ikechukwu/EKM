import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={<div className="text-center py-20">About Us</div>}
            />
            <Route
              path="/compliance"
              element={<div className="text-center py-20">Compliance</div>}
            />
            <Route
              path="/services"
              element={<div className="text-center py-20">Services</div>}
            />
            <Route
              path="/contact"
              element={<div className="text-center py-20">Contact Us</div>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
