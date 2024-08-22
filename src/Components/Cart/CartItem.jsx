import React, { useEffect, useContext, useState } from 'react'
import { products } from '../../Store/ProductStore'

const CartItem = ({ item, calculate }) => {
  const { delProduct, calculateCartQuantity } = useContext(products)
  let [quantity, setQuantity] = useState(item.selected_quantity)

  useEffect(() => {
    setQuantity(item.selected_quantity);
  }, [item.selected_quantity]);

  const handelQuantity = (event) => {
    const newQuantity = Number(event.target.value)
    setQuantity(newQuantity)
    item.selected_quantity = newQuantity;
    calculateCartQuantity();
  }

  useEffect(() => {
    item.total_amount = (Number(item.price) * quantity)
    calculate();
  }, [quantity])

  return (
    <div className="flex mt-3">
      <img src={item.img[0]} alt="" className="lg:h-56 lg:w-48 h-44 w-36" />
      <div className="ml-5 lg:w-[28rem] w-screen">
        <div className="sm:flex justify-between">
          <h1 className="font-semibold">{item.name}</h1>
          {item.sale ? <div className="flex"> <p className="line-through font-semibold mr-8">MRP: ₹ {item.old_price}</p>
            <p className="font-semibold">Sale Price : ₹ {item.price}</p>
          </div> : <p className="font-semibold">MRP: ₹ {item.price}</p>}
        </div>
        <p className="font-semibold text-[#4d4d4d]">{item.category}</p>
        <p className="font-semibold text-[#4d4d4d]">1 Color</p>
        <p>Size : {item.selected_size}</p>
        <div className='flex  justify-between md:block'>
          <h1>Quantity :
            <select value={quantity} onChange={(event) => handelQuantity(event)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash md:mt-4" viewBox="0 0 16 16" onClick={() => delProduct(item.id, item.selected_size)}>
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CartItem
