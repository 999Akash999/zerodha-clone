import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
 function ProductsPage() {
    return ( <>
    <Hero />
    <LeftSection imageURL="https://zerodha.com/static/images/products-kite.png" 
    productName="Kite" 
    ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
    tryDemo="tryDemo" 
    learnMore="Learn More" 
    googlePlay="" 
    appStore="" 
    />
    <RightSection productName="Console"
    ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
    learnMore="Learn more"
    imageURL="https://zerodha.com/static/images/products-console.png"
    />
    <LeftSection imageURL="https://zerodha.com/static/images/products-coin.png" 
    productName="Coin" 
    ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
    tryDemo="Coin " 
    learnMore=" Learn More" 
    googlePlay="" 
    appStore="" 
    />
    <RightSection productName="Kite Connect API"
    ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase"
    learnMore="Kite Connect"
    imageURL="https://zerodha.com/static/images/kite-trade/landing.svg"
    />
    <LeftSection imageURL="https://zerodha.com/static/images/varsity-products.svg" 
    productName="Varsity mobile" 
    ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
    tryDemo="tryDemo" 
    learnMore="Learn More" 
    googlePlay="" 
    appStore="" 
    />
    <Universe />
    </> );
 }
 
 export default ProductsPage;