import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// LOCAL IMPORTS
import "./App.scss";


import Home from "./pages/home/Home";
import Property from "./pages/property/Property";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
      </Routes>
    </Router>
  );
}

export default App;
