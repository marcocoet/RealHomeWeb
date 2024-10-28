import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/homepage";
import Header from "./pages/header";
import Footer from "./pages/footer";
import SignUpForm from "./pages/signuppage";
import LogInPage from "./pages/loginpage";
import RentPage from "./pages/rentpage";
import SellPage from "./pages/sellpage";

const Layout = () => {
  const location = useLocation();
  const previousPath = location.state?.from || "/"; // Get previous path from state

  return (
    <>
      <Header previousPath={previousPath} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/rent" element={<RentPage />} />
            <Route path="/sell" element={<SellPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
