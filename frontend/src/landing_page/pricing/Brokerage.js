import React from 'react';
function Brokerage() {
    return ( 
    <div className='container'>
        <div className='row text-center mb-5'>
            <h4><a href="https://zerodha.com/brokerage-calculator"style={{textDecoration:"none",fontWeight:"400"}}>Calculate your costs upfront </a>using our brokerage calculator</h4>
        </div>
        <h3>Charges explained</h3>
        <div className='row'>
            <div className='col-6'>
<h5>Securities/Commodities transaction tax</h5>

Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.

<h5>Transaction/Turnover Charges</h5>

Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)

BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.

BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.

BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.

<h5>Call & trade</h5>

Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.

<h5>Stamp charges</h5>

Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.

<h5>NRI brokerage charges</h5>

For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).
For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
₹500 + GST as yearly account maintenance charges (AMC) charges.
<h5>Account with debit balance</h5>

If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.

<h5>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>

Equity and Futures - ₹0.01 per crore + GST of the traded value.
Options - ₹0.01 per crore + GST traded value (premium value).
Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.
<h5>Margin Trading Facility (MTF)</h5>

MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.
MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.
            </div>
            <div className='col-6'>
Securities/Commodities transaction tax

Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.

Transaction/Turnover Charges

Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)

BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.

BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.

BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.

Call & trade

Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.

Stamp charges

Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.

NRI brokerage charges

For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).
For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
₹500 + GST as yearly account maintenance charges (AMC) charges.
Account with debit balance

If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.

Charges for Investor's Protection Fund Trust (IPFT) by NSE

Equity and Futures - ₹0.01 per crore + GST of the traded value.
Options - ₹0.01 per crore + GST traded value (premium value).
Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.
Margin Trading Facility (MTF)

MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.
MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.
            </div>
        </div>

    </div> );
}

export default Brokerage;