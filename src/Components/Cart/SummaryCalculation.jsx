import React, { useContext } from 'react'
import { products } from '../../Store/ProductStore'

const SummaryCalculation = () => {
 let {subTotal, grandTotal, cartList}= useContext(products)
  return (
    <div className='flex-row'>
      <div className='text-center lg:text-start'>
        <h1 className="md:text-4xl text-3xl font-semibold">Summary</h1>
        </div>
        <div className="flex mt-3 justify-between font-semibold">
          <h1>SubTotal</h1>
          <p>₹ {cartList.length==0? 0 : subTotal}</p>
        </div>
        <div className="flex mt-3 justify-between border-b pb-4 font-semibold">
          <h1>Estimated Delivery & Handling</h1>
          <p>₹ {cartList.length==0? 0 :100 }</p>
        </div>
        <div className="flex mt-3 justify-between border-b pb-4">
          <h1>Total</h1>
          <p>₹ { cartList.length==0? 0: grandTotal} </p>
        </div>
    </div>
  )
}

export default SummaryCalculation
