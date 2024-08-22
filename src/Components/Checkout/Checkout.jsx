import React, { useContext } from 'react'
import Form from './Form'
import { products } from '../../Store/ProductStore'
import SummaryCalculation from '../Cart/SummaryCalculation'
import CheckoutCartItem from './CheckoutCartItem'

const Checkout = () => {
  const {cartList}= useContext(products)
  return (
    <>
    <center>
      <h1 className='text-4xl font-semibold my-4'>Checkout</h1>
    </center>
    <div className='flex justify-center '>
    <Form></Form>
    <div className='max-w-80 ml-5'>
    <SummaryCalculation></SummaryCalculation>
    <h1 className='my-5 font-semibold text-3xl'>Bag Summary</h1>
    {
      cartList.map((item, index)=>(<CheckoutCartItem item={item} key={index}></CheckoutCartItem>))
    }
    </div>
    </div>
    </>
  )
}

export default Checkout
