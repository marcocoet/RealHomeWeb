import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Header from "./pages/header";
import Footer from "./pages/footer";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
