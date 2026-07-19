import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center mt-5 p-5 '>
                <h3>Charges</h3>
                <h5 className='text-muted p-3'>List of all charges and taxes</h5>
            </div>
            <div className='row p-5 text-center'>
                <div className='col-4'>
                    <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="pricing" style={{width:"70%"}}/>
                    <h3>Free equity delivery</h3>
                    <p style={{paddingleft:"5%",paddingRight:"5%",paddingTop:"5%"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src="https://zerodha.com/static/images/other-trades.svg" alt="pricing" style={{width:"70%"}}/>
                    <h3>Intraday and F&O trades</h3>
                    <p style={{paddingleft:"5%",paddingRight:"5%",paddingTop:"5%"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="pricing" style={{width:"70%"}}/>
                    <h3>Free direct MF</h3>
                    <p style={{paddingLeft:"5%",paddingRight:"5%",paddingTop:"5%"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;