import './styles/Footer.css'; // Adjust the path as needed
import instaLogo from './images/instalogo.png'; // Adjust the path as needed
import fbLogo from './images/fblogo.png'; // Adjust the path as needed
import twitterLogo from './images/twitterlogo.png'; // Adjust the path as needed

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-header">
        <strong>RealHome</strong>
        <div className="footer-icons">
          <img src={instaLogo} alt="Instagram" />
          <img src={fbLogo} alt="Facebook" />
          <img src={twitterLogo} alt="Twitter" />
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-content">
        <p>
          <a href="/AboutUsPage">About us</a>
        </p>
        <p>
          <a href="/TermsAndConditionPage">Terms and Conditions</a>
        </p>
      </div>
    </footer>
  );
}
