import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Header from "./pages/header";
import Footer from "./pages/footer";
import SignUpForm from "./pages/signuppage";
import LogInPage from "./pages/loginpage";
import RentPage from "./pages/rentpage";
import SellPage from "./pages/sellpage";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/sell" element={<SellPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
