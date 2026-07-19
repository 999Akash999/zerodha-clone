import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [profilePhoto, setProfilePhoto] = useState(localStorage.getItem("profilePhoto"));

  const uploadPhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("profilePhoto", reader.result);
      setProfilePhoto(reader.result);
      window.dispatchEvent(new Event("profilePhotoChanged"));
    };
    reader.readAsDataURL(file);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    document.cookie = "token=; Path=/; Max-Age=0; SameSite=Lax";
    window.dispatchEvent(new Event("authChanged"));
    navigate("/", { replace: true });
  };

  return (
    <main className="profile-page">
      <section className="profile-card">
        <p className="profile-label">PROFILE</p>
        <label className="profile-photo" title="Upload profile photo">
          {profilePhoto ? <img src={profilePhoto} alt="Profile" /> : <span>{user.name?.charAt(0).toUpperCase() || "U"}</span>}
          <input type="file" accept="image/*" onChange={uploadPhoto} />
        </label>
        <h1>{user.name || "Zerodha user"}</h1>
        <p>{user.email || "Your account is active"}</p>
        <a className="profile-dashboard" href={DASHBOARD_URL}>Open dashboard</a>
        <Link className="profile-home" to="/">Back to website</Link>
        <button className="profile-logout" onClick={logout}>Log out</button>
      </section>
    </main>
  );
}

export default Profile;
