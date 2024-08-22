import React from 'react'

const CheckoutCartItem = ({item}) => {
  return (
    <div className='flex my-2'>
      <img src={item.img[0]} alt="" className="h-40 w-32" />
      <div className="ml-5 min-w-[20rem]">
          <h1 className="font-semibold">{item.name}</h1>
          {item.sale ? <div className="flex"> <p className="line-through font-semibold mr-8">MRP: ₹ {item.old_price}</p>
            <p className="font-semibold">Sale Price : ₹ {item.price}</p>
          </div> : <p className="font-semibold">MRP: ₹ {item.price}</p>}
        <p className="font-semibold text-[#4d4d4d]">{item.category}</p>
        <p className="font-semibold text-[#4d4d4d]">1 Color</p>
        <p>Size : {item.selected_size}</p>
        <p>Quantity : {item.selected_quantity}</p>
        </div>
    </div>
  )
}

export default CheckoutCartItem
