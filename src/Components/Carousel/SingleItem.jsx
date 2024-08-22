import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../Store/ProductStore'
const SingleItem = ({ item }) => {
const {handleLinkClick}=useContext(products)

  return (
    <div className='font-semibold w-full h-full flex justify-center flex-col px-5'>
      <div className='h-full w-full overflow-hidden '>
        <Link to={`/product/${item.id}`} onClick={handleLinkClick}><img src={item.img[0]} alt="" className='w-full h-full object-cover' /></Link>
      </div>
      <h1>{item.name}</h1>
      <h1 className='text-[#5f5f5f]'>{item.category}</h1>
      {item.sale ? <div className="flex"> <h1 className="line-through font-semibold mr-8">MRP: ₹ {item.old_price}</h1>
        <h1 className="font-semibold">Sale Price : ₹ {item.price}</h1>
      </div> : <h1 className="font-semibold">MRP: ₹ {item.price}</h1>}
    </div>
  )
}

export default SingleItem
