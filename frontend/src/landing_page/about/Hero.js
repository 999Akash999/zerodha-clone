import React from 'react';
function Hero() {
    return (  
        <div className='container p-5'>
            <div className='row p-5 '>
                <h3 className='mt-5 text-muted mb-5' style={{textAlign:"center"}}>We pioneered the discount broking model in India.<br/>
Now, we are breaking ground with our technology.</h3>
<hr/>
            <div className='col-6 mt-5 ml-5 ' style={{paddingRight:"10%"}}>
                <p className='text-muted mb-4'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

<p className='text-muted mb-4'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

<p className='text-muted mb-4'>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
            </div>
            <div className='col-6 mt-5 ml-4'style={{paddingRight:"10%"}}>
                <p className='text-muted mb-4'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

<p className='text-muted mb-5'>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

<p className='text-muted mb-5'>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
            </div>
            </div>
<div className='row p-5 '>
    <div className='col-6 mt-5 text-center'>
        <img src='/images/nithinKamath.jpg' alt='CEO ' style={{ borderRadius:"100%",width:"60%",marginLeft:""}}/>
        <h4 className='mt-3'>Nithin Kamath</h4>
        <p>Founder, CEO</p>
    </div>
    <div className='col-6' style={{paddingRight:"10%"}}>
        <h2 className='text-muted mb-5'>People</h2>
        <p className='text-muted'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p className='text-muted'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p className='text-muted'>Playing basketball is his zen.</p>

<p className='text-muted'>Connect on Homepage / TradingQnA / Twitter</p>
    </div>
</div>
        </div>
     );
}

export default Hero;