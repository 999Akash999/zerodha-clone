import React from 'react';
function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mt-3'>
                    <h3 className='mb-3'>Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=''style={{textDecoration:"none"}}><h6 >See pricing <i class="fa-solid fa-arrow-down fa-rotate-270 fa-sm"></i></h6></a>
                </div>
                <div className='col-6 mt-5'>
                    <div className='row'>
                        <div className='col-3 m-2 fs-5 p-2'style={{border:"1px solid white",boxShadow:"0px 1px 2px black",borderRadius:"1rem"}}>
                            <img src='/images/pricing0.svg'style={{width:"60%"}}/>
                            
                            
                            <p className='text-muted'style={{fontSize:"1rem"}}>Free account
opening</p>
                            
                            
                        </div>
                        <div className='col-3 m-2'style={{border:"1px solid white",boxShadow:"0px 1px 2px black",borderRadius:"1rem"}}>
                             <img src='/images/pricing0.svg'style={{width:"60%"}}/>
                             <p className='text-muted' style={{fontSize:"1rem"}}>Free equity delivery
and direct mutual funds</p>
                        </div>
                        <div className='col-3 m-2'style={{border:"1px solid white",boxShadow:"0px 1px 2px black",borderRadius:"1rem"}}>
                             <img src='/images/intradayTrades.svg' style={{width:"60%"}}/>
                             <p className='text-muted' style={{fontSize:"1rem"}}>Intraday and
F&O</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
