import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const isAuthenticated = () => Boolean(localStorage.getItem("token") || document.cookie.includes("token="));
    const [signedIn, setSignedIn] = useState(isAuthenticated);
    const [profilePhoto, setProfilePhoto] = useState(localStorage.getItem("profilePhoto"));
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {
      const syncAuth = () => setSignedIn(isAuthenticated());
      const syncPhoto = () => setProfilePhoto(localStorage.getItem("profilePhoto"));
      window.addEventListener("authChanged", syncAuth);
      window.addEventListener("profilePhotoChanged", syncPhoto);
      window.addEventListener("storage", syncAuth);
      return () => {
        window.removeEventListener("authChanged", syncAuth);
        window.removeEventListener("profilePhotoChanged", syncPhoto);
        window.removeEventListener("storage", syncAuth);
      };
    }, []);

    return ( 
        
            <nav className="navbar navbar-expand-lg  mb-5 bg-body-tertiary col-12 border-bottom " style={{position:"fixed",marginBottom:"5rem"}}>
  <div className="container">
    <Link className="navbar-brand p-2" to="/"><img src='/images/logo.svg' alt="Zerodha" style={{width:"30%"}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          {!signedIn && <Link className="nav-link active" aria-current="page" to="/Signup">Signup</Link>}
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Support">Support</Link>
        </li>
        
        </ul>
        {signedIn && (
          <Link className="navbar-profile" to="/Profile" title="Open profile">
            {profilePhoto ? <img src={profilePhoto} alt="Profile" /> : <span>{user.name?.charAt(0).toUpperCase() || "U"}</span>}
          </Link>
        )}
    </div>
  </div>
</nav>
        
    );
}

export default Navbar;
