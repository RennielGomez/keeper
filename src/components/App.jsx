import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div>
      <Header />
      
      <Router>
        <Routes>
          <Route path="/" exact element={<Container />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
