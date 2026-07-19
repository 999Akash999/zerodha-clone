import React from 'react';
function Universe() {
    return ( 
        <div className='container mb-5'>
            <div className='row text-center mb-5'>
                <h4 className='mb-5 text-muted'>Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.

</h4>
                <h3 className='mb-3 mt-5'>The Zerodha Universe</h3>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center' style={{paddingLeft:"10%",paddingRight:"10%"}}>
                <div className='col-4 '>
                    <img src='https://zerodha.com/static/images/partners/zerodhafundhouse.png'alt='universe' style={{width:"60%",paddingTop:"2%"}}></img>
                    <p style={{fontSize:"smaller",padding:"2rem"}}>

Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>

                </div>
                <div className='col-4'>
                    <img src='https://zerodha.com/static/images/products/sensibull-logo.svg'alt='universe' style={{width:"70%",paddingTop:"2.5%" }}></img>
                    <p style={{fontSize:"smaller",padding:"3rem"}}>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
                </div>
                <div className='col-4'>
                    <img src='https://zerodha.com/static/images/partners/tijori.svg'alt='universe' style={{width:"50%"}}></img>
                    <p style={{fontSize:"smaller",padding:"2rem"}}>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
                </div>
            </div>
            <div className='row text-center 'style={{paddingLeft:"10%",paddingRight:"10%"}}>
                <div className='col-4'>
                    <img src='https://zerodha.com/static/images/products/streak-logo.png'alt='universe' style={{width:"50%"}}></img>
                    <p style={{fontSize:"smaller",padding:"2rem"}}>
Systematic trading platform
that allows you to create and backtest
strategies without coding</p>
                </div>
                <div className='col-4'>
                    <img src='https://zerodha.com/static/images/products/smallcase-logo.png'alt='universe' style={{width:"50%"}}></img>
                    <p style={{fontSize:"smaller",padding:"2rem",paddingTop:"2.8rem"}}>
Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4'>
                    <img src='https://zerodha.com/static/images/products/ditto-logo.png'alt='universe' style={{width:"40%"}}></img>
                    <p style={{fontSize:"smaller",padding:"2rem"}}>
Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
                </div>
            </div>
        </div>
    );
}

export default Universe;