import React, {useState, useEffect} from 'react';

function PortfolioBox(props) {
    return(
<div>

<div className={'col-span-12 border bg-blue-100 h-50'}>
              <h1 className={'text-4xl font-bold text-center'}>PORTFOLIO BOX</h1>

              <div className={'grid grid-cols-12 p-10'}>
                  <div className={'col-span-3 border bg-blue-800 p-2'}>
                     <h1 className={'text-white text-center underline'}><b>STOCK SYMBOL</b></h1>
                  </div>
                  <div className={'col-span-3 border bg-blue-800 p-2'}>
                  <h1 className={'text-white text-center underline'}><b>QUANTITY</b></h1>
                  </div>
                  <div className={'col-span-3 border bg-blue-800 p-2'}>
                  <h1 className={'text-white text-center underline'}><b>VALUE</b></h1>
                  </div>
                  <div className={'col-span-3 border bg-blue-800 p-2'}>
                  <h1 className={'text-white text-center underline'}><b>SELL</b></h1>
                  </div>
              </div>
        
                  <div className={'cols-span-12'}></div>
                  <div className={'grid grid-cols-12'}></div>
                  <div className={'col-span-3 border p-2'}>
                     <h1 className={'text-center'}><b>AAPL</b></h1>
                  </div>
                  <div className={'col-span-3 border p-2'}>
                  <h1 className={'text-center'}><b>100</b></h1>
                  </div>
                  <div className={'col-span-3 border p-2'}>
                  <h1 className={'text-center'}><b>2000</b></h1>
                  </div>
                  <div className={'col-span-3 border p-2'}>
                  <h1 className={'text-center'}><b></b></h1>
                  <button className={'px-6 bg-red-700 text-white rounded py-3 mr-4 font-bold'}>SELL</button>
                  </div>

                  
          </div>
</div>
    );
}


export default PortfolioBox;
