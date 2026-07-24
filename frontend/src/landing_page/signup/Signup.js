import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

function Signup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState("phone"); // 'phone', 'otp', 'details'
  const [userDetails, setUserDetails] = useState({ name: "", email: "", password: "" });

  const handleGetOTP = async (event) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    // Validate phone number
    if (phoneNumber.length !== 10 || !/^\d{10}$/.test(phoneNumber)) {
      setMessage("Please enter a valid 10-digit phone number");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/request-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Unable to send OTP");

      setMessage(data.message || "OTP sent successfully");
      setOtpSent(true);
      setStep("otp");
    } catch (error) {
      setMessage(error.message || "Unable to reach the server");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOTP = async (event) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      setMessage("Please enter a valid 6-digit OTP");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber, otp }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Invalid OTP");

      setMessage("OTP verified. Please enter your details.");
      setStep("details");
    } catch (error) {
      setMessage(error.message || "Unable to verify OTP");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userDetails.name,
          email: userDetails.email,
          phone: phoneNumber,
          password: userDetails.password,
        }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Unable to create account");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      document.cookie = `token=${encodeURIComponent(data.token)}; Path=/; SameSite=Lax`;
      window.dispatchEvent(new Event("authChanged"));
      window.location.href = "/";
    } catch (error) {
      setMessage(error.message || "Unable to reach the server");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateDetailsField = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  return (
    <main className="signup-page">
      <section className="signup-container">
        <div className="signup-header">
          <h1>Signup now</h1>
          <p>Or track your existing application</p>
        </div>

        {step === "phone" && (
          <form onSubmit={handleGetOTP} className="signup-form phone-form">
            <div className="phone-input-group">
              <div className="country-code">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'%3E%3Crect width='900' height='600' fill='%23FF9933'/%3E%3Cline x1='0' y1='200' x2='900' y2='200' stroke='%23FFF' stroke-width='100'/%3E%3Cline x1='0' y1='400' x2='900' y2='400' stroke='%23128807' stroke-width='100'/%3E%3Ccircle cx='450' cy='300' r='60' fill='%23000' opacity='0.25'/%3E%3C/svg%3E" 
                  alt="India flag" 
                  className="flag-icon"
                />
                <span className="country-code-text">+91</span>
              </div>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                maxLength="10"
                required
                className="phone-input"
              />
            </div>
            <button type="submit" disabled={isSubmitting} className="get-otp-btn">
              {isSubmitting ? "Sending OTP..." : "Get OTP"}
            </button>
            {message && <p className={`signup-message ${message.includes("error") || message.includes("Invalid") ? "error" : "success"}`}>{message}</p>}
            <div className="terms-section">
              <p>By proceeding, you agree to the <Link to="#" className="link">terms & privacy policy</Link></p>
            </div>
            <div className="nri-section">
              <p>Looking to open NRI account? <Link to="#" className="link">Click here</Link></p>
            </div>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleVerifyOTP} className="signup-form otp-form">
            <p className="otp-info">We've sent a 6-digit OTP to +91{phoneNumber}</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              maxLength="6"
              required
              className="otp-input"
            />
            <button type="submit" disabled={isSubmitting} className="verify-btn">
              {isSubmitting ? "Verifying..." : "Verify OTP"}
            </button>
            <button 
              type="button" 
              onClick={() => { setStep("phone"); setPhoneNumber(""); setOtp(""); setMessage(""); }} 
              className="back-btn"
            >
              Change phone number
            </button>
            {message && <p className={`signup-message ${message.includes("error") || message.includes("Invalid") ? "error" : "success"}`}>{message}</p>}
          </form>
        )}

        {step === "details" && (
          <form onSubmit={handleSignup} className="signup-form details-form">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={userDetails.name}
              onChange={updateDetailsField}
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={userDetails.email}
              onChange={updateDetailsField}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              minLength="6"
              value={userDetails.password}
              onChange={updateDetailsField}
              required
            />

            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
            {message && <p className={`signup-message ${message.includes("error") ? "error" : "success"}`}>{message}</p>}
          </form>
        )}
      </section>
    </main>
  );
}

export default Signup;
