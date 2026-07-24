import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

function Signup() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);
  const [signupForm, setSignupForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [loginForm, setLoginForm] = useState({ phone: "", password: "" });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateSignupField = (event) => {
    setSignupForm({ ...signupForm, [event.target.name]: event.target.value });
  };

  const updateLoginField = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupForm),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Unable to create account");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      document.cookie = `token=${encodeURIComponent(data.token)}; Path=/; SameSite=Lax`;
      window.dispatchEvent(new Event("authChanged"));
      navigate("/", { replace: true });
    } catch (error) {
      setMessage(error.message || "Unable to reach the server");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneLogin = async (event) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/login-phone`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Unable to login");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      document.cookie = `token=${encodeURIComponent(data.token)}; Path=/; SameSite=Lax`;
      window.dispatchEvent(new Event("authChanged"));
      navigate("/", { replace: true });
    } catch (error) {
      setMessage(error.message || "Unable to reach the server");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setMessage("");
    setSignupForm({ name: "", email: "", phone: "", password: "" });
    setLoginForm({ phone: "", password: "" });
  };

  return (
    <main className="signup-page">
      <section className="signup-card">
        <div className="tab-toggle">
          <button
            className={`tab-button ${isSignup ? "active" : ""}`}
            onClick={() => !isSignup && toggleMode()}
          >
            Create Account
          </button>
          <button
            className={`tab-button ${!isSignup ? "active" : ""}`}
            onClick={() => isSignup && toggleMode()}
          >
            Login with Phone
          </button>
        </div>

        {isSignup ? (
          <>
            <h1>Open your account</h1>
            <p>Start investing with your free account.</p>
            <form onSubmit={handleSignup}>
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" value={signupForm.name} onChange={updateSignupField} required />

              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" value={signupForm.email} onChange={updateSignupField} required />

              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="tel" placeholder="10-digit phone number" value={signupForm.phone} onChange={updateSignupField} required />

              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" minLength="6" value={signupForm.password} onChange={updateSignupField} required />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </form>
            {message && <p className={message.startsWith("Account") || message.startsWith("Email") ? "signup-success" : "signup-error"}>{message}</p>}
            <p className="signup-login-link">Already have an account? <Link to="/Login">Log in</Link></p>
          </>
        ) : (
          <>
            <h1>Login with Phone</h1>
            <p>Sign in using your phone number and password.</p>
            <form onSubmit={handlePhoneLogin}>
              <label htmlFor="login-phone">Phone number</label>
              <input id="login-phone" name="phone" type="tel" placeholder="10-digit phone number" value={loginForm.phone} onChange={updateLoginField} required />

              <label htmlFor="login-password">Password</label>
              <input id="login-password" name="password" type="password" minLength="6" value={loginForm.password} onChange={updateLoginField} required />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>
            {message && <p className={message.includes("Invalid") ? "signup-error" : "signup-success"}>{message}</p>}
            <p className="signup-login-link">Don't have an account? <Link to="/Signup">Create one</Link></p>
          </>
        )}
      </section>
    </main>
  );
}

export default Signup;
