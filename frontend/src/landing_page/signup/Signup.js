import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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

  return (
    <main className="signup-page">
      <section className="signup-card">
        <h1>Open your account</h1>
        <p>Start investing with your free account.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" value={form.name} onChange={updateField} required />

          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={updateField} required />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" minLength="6" value={form.password} onChange={updateField} required />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Create account"}
          </button>
        </form>
        {message && <p className={message.startsWith("Account") ? "signup-success" : "signup-error"}>{message}</p>}
        <p className="signup-login-link">Already have an account? <Link to="/Login">Log in</Link></p>
      </section>
    </main>
  );
}

export default Signup;
