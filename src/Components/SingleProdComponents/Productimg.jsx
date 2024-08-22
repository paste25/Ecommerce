import React from 'react'
import { useState } from 'react';
import MobileCarousel from './MobileCarousel';

const Productimg = ({singleProduct}) => {
  let [displayImage, setDisplayImage] = useState(0);
  return (
    <>
    <div className='sm:flex lg:self-start lg:sticky lg:top-0 sm:flex-row-reverse justify-center flex-col items-center hidden'>
      <div className='max-w-[32rem]'>
          <img src={singleProduct.img[displayImage]} alt="" className='h-[650px] border-0 rounded-xl' />
        </div>
        <div className='sm:max-w-32 sm:mr-7 sm:mt-4 grid items-center sm:grid-row grid-cols-3 sm:grid-cols-1 auto-flow'>
          {singleProduct.img.map((value, i) => <img src={value} key={i} alt="" className='h-28 mb-5 mr-5 mt-5 sm:mr-0 sm:mt-0' onClick={() => setDisplayImage(i)} />)}
        </div>
      </div>
      <div className='grid grid-cols-[repeat(5,100%)] overflow-y-hidden sm:hidden'>
      <MobileCarousel productImg={singleProduct.img}></MobileCarousel>
      </div>
      </>
  )
}

export default Productimg
