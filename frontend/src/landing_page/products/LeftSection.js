import React from 'react';
function LeftSection( {imageURL,productName,ProductDescription,tryDemo,learnMore,googlePlay,appStore,}) {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 '>
                    <img src={imageURL}/>
                </div>
                <div className='col-6'>
                    <h1>{productName}</h1>
                    <p>{ProductDescription}</p>
                    <div>
                    <a href={tryDemo}>{tryDemo}<i class="fa-solid fa-arrow-down fa-rotate-270 fa-sm"></i></a>
                    <a href={learnMore}>{learnMore} <i class="fa-solid fa-arrow-down fa-rotate-270 fa-sm"></i></a>
                    </div>
                    <div>
                    <a href={googlePlay}><img src='/images/googlePlayBadge.svg'/></a>
                    <a href={appStore}><img src='/images/appStoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;