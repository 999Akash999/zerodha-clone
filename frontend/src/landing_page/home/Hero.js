import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    const signedIn = Boolean(localStorage.getItem("token") || document.cookie.includes("token="));

    return ( 
        <div className='container p-5'>
            <div className='row text-center mt-5'>
                <img src='/images/homeHero.png' alt="Zerodha platform illustration" className='mb-5'style={{width:"100%"}}/>
                <h1 className='mt-8 mb-3'>Invest in everything</h1>
                <p className='mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    {!signedIn && <Link className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:" 0 auto"}} to="/Signup">Sign up for free</Link>}


            </div>
        </div>
     );
}

export default Hero;
