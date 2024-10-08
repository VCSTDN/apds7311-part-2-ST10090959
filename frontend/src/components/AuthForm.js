import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import '../style.scss';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    try {
      const response = await axiosInstance.post('https://localhost:8443/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed: ' + (error.response?.data?.msg || error.message));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
    try {
      const response = await axiosInstance.post('/api/auth/register', {
        name: firstName,
        surname: lastName,
        email,
        password,
      });
      alert('Signup successful! You can now log in.');
      setIsLogin(true); // Switch to login form after successful signup
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed: ' + (error.response?.data?.msg || error.message));
    }
  };

  return (
    <div className="form">
      <ul className="tab-group">
        <li className={`tab ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>
          <a href="#signup">Sign Up</a>
        </li>
        <li className={`tab ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>
          <a href="#login">Log In</a>
        </li>
      </ul>

      <div className="tab-content">
        {!isLogin ? (
          <div id="signup">
            <h1>Sign Up for Free</h1>
            <form onSubmit={handleSignup}>
              <div className="top-row">
                <div className="field-wrap">
                  <label>First Name<span className="req">*</span></label>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="field-wrap">
                  <label>Last Name<span className="req">*</span></label>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
              </div>
              <div className="field-wrap">
                <label>Email Address<span className="req">*</span></label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="field-wrap">
                <label>Set A Password<span className="req">*</span></label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="button button-block">Get Started</button>
            </form>
          </div>
        ) : (
          <div id="login">
            <h1>Welcome Back!</h1>
            <form onSubmit={handleLogin}>
              <div className="field-wrap">
                <label>Email Address<span className="req">*</span></label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="field-wrap">
                <label>Password<span className="req">*</span></label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="button button-block">Log In</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
