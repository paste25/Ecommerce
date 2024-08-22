import { useContext } from 'react'
import { products } from '../../Store/ProductStore'

const CartButton = ({value, handelBtn}) => {
  let {cartList}=useContext(products)
  return (
       <button className={`block bg-black text-white w-full py-3 rounded-3xl font-semibold mt-3 ${cartList.length===0 && 'opacity-20'}`} onClick={handelBtn} >{value}</button>
  )
}

export default CartButton
