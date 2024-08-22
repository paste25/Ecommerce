import React, { useContext } from 'react'
import { products } from '../../Store/ProductStore'
import { useParams } from 'react-router-dom'
import ProductDisplay from './ProductDisplay'

const Product = () => {
  const {allProducts} = useContext(products);
  const {productID} = useParams();
  const singleProduct = allProducts.find(value=>value.id===Number(productID))
  return (
      <ProductDisplay singleProduct={singleProduct}></ProductDisplay>
  )
}

export default Product
