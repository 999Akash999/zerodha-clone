import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='/images/education.svg'/>
                </div>
                <div className='col-6 mt-5'>
                    <h4>Free and open market education
</h4>
<p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
<a href='' style={{textDecoration:"none"}}>Varsity<i class="fa-solid fa-arrow-down fa-rotate-270 fa-sm"></i></a>
<p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
<a href='' style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-arrow-down fa-rotate-270 fa-sm"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;
