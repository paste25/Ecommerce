import ProductCarousel from '../Carousel/ProductCarousel'
import Productimg from './Productimg'
import Productdesc from './Productdesc'
import React from 'react'

const ProductDisplay = ({ singleProduct }) => {
  const ProductCarouselMemo = React.memo(ProductCarousel);
  return (
    <>
    <div className='lg:flex lg:mt-20 justify-center mb-44 mt-5'>
      <Productimg singleProduct={singleProduct}></Productimg>
      <Productdesc singleProduct={singleProduct}></Productdesc>
    </div>
    <h1 className='font-semibold text-4xl ml-9 mb-6 mt-20'>You Might Also Like</h1>
    <ProductCarouselMemo />
    </>
  )
}

export default ProductDisplay
