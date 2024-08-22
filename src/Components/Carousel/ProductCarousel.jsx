import React, { useContext, useEffect, useState } from 'react'
import { products } from '../../Store/ProductStore'
import SingleItem from './SingleItem';
import _ from 'lodash';
import ButtonGroup from './ButtonGroup';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductCarousel = ({newProductsList}) => {
  let { allProducts } = useContext(products)
  const carouselList = newProductsList || allProducts;
  let randomFilteredProducts = _.shuffle(carouselList);
  let FilteredProducts = randomFilteredProducts.slice(0, 6)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    laptop: {
      breakpoint: { max: 1650, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  return (
    <div className='w-full'>
    <Carousel responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
      {FilteredProducts.map((value, index)=><SingleItem item={value} key={index}></SingleItem>)}
    </Carousel>
    </div>
  )
}


export default ProductCarousel
