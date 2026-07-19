import React from 'react';
function RightSection({productName,ProductDescription,learnMore,imageURL}) {
    return ( <div className='container mt-5 mb-5'>
            <div className='row'>
                
                <div className='col-6'>
                    <h1>{productName}</h1>
                    <p>{ProductDescription}</p>
                    
                    
                    <a href={learnMore}>{learnMore} <i class="fa-solid fa-arrow-down fa-rotate-270 fa-sm"></i></a>
                    
                    
                </div>
                <div className='col-6 '>
                    <img src={imageURL}/>
                </div>
            </div>
        </div> );
}

export default RightSection;