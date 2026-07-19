import React from 'react';
function Team() {
    return (  
        <div className='container mt-3 mb-5'style={{paddingBottom:"5%"}}>
            <div className='row mb-5 text-center'>
                <div className='col-4 team'>
                    <img src='https://zerodha.com/static/images/Nikhil.jpg' alt='team member'style={{borderRadius:"100%",width:"60%"}}/>
                    
                    <h4 className='mt-3  mb-3'>Nikhil Kamath</h4>
                    <p>Co-founder & CFO</p>
                </div>
                <div className='col-4 team'>
                    <img src='https://zerodha.com/static/images/Kailash.jpg' alt='team member'style={{borderRadius:"100%",width:"60%"}}/>
                    <h4 className='mt-3 mb-3'>Dr. Kailash Nadh</h4>
                    <p>CTO</p>
                </div>
                <div className='col-4 team'>
                    <img src='https://zerodha.com/static/images/Venu.jpg' alt='team member'style={{borderRadius:"100%",width:"60%"}}/>
                    <h4 className='mt-3 mb-3'>Venu Madhav</h4>
                    <p>COO</p>
                </div>
            </div>
            <div className='row mt-5 text-center'>
                <div className='col-4 team'>
                    <img src='https://zerodha.com/static/images/Seema.jpg' alt='team member'style={{borderRadius:"100%",width:"60%"}}/>
                    <h4 className='mt-3 mb-3'>Seema Patil</h4>
                    <p>Director</p>
                </div>
                <div className='col-4 team'>
                    <img src='https://zerodha.com/static/images/karthik.jpg' alt='team member'style={{borderRadius:"100%",width:"60%"}}/>
                    <h4 className='mt-3 mb-3'>Karthik Rangappa</h4>
                    <p>Chief of Education</p>
                </div>
                <div className='col-4  team'>
                    <img src='https://zerodha.com/static/images/Austin.jpg' alt='team member'style={{borderRadius:"100%",width:"60%"}}/>
                    <h4 className='mt-3 mb-3'>Austin Prakesh</h4>
                    <p>Director Strategy</p>
                </div>
            </div>


        </div>
    );
}

export default Team;