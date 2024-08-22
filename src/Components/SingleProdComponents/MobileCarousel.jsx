import React from 'react'

const MobileCarousel = ({productImg}) => {
  return (
    <>
      {productImg.map((value, i)=><div key={i} className='h-[90%] w-[100%]'><img src={value} alt="shoes" /></div>)}
      </>
  )
}

export default MobileCarousel
