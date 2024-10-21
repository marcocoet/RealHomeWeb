import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="form-group checkbox">
            <input 
              type="checkbox" 
              id="rememberMe" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="submit-btn">Log In</button>
        </form>
        <div className="form-footer">
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          <p>Don&apos;t have an account? <Link to="/signup" className="signup-link">Sign Up</Link></p>
        </div>
        <div className="social-login">
          <p>Or log in with:</p>
          <div className="social-buttons">
            <button className="social-btn google">Google</button>
            <button className="social-btn facebook">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}