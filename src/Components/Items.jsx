
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../Store/ProductStore'
const Items = (props) => {
  const { handleLinkClick}=useContext(products)

  return (
    <div className="pb-5 pt-2 px-5 rounded ">
      <Link to={`/product/${props.value.id}`}><img src={props.value.img[0]} alt="shoes" className='' onClick={ handleLinkClick}/></Link>
      <h1 className="text-orange-700 font-semibold">{props.value.bestseller && "Best Seller"}</h1>
      <h1 className="font-medium">{props.value.name}</h1>
      <p className="font-bold text-[#5f5f5f]">1 Color</p>
      {props.value.sale  ? <>
      { props.value.sale && <h1 className="font-bold text-[#5f5f5f]">{props.value.category}</h1>}
      <div className="">
      <h1 className="font-bold text-[#313131] line-through lg:inline mr-3">MRP : ₹ {props.value.old_price}</h1>
      <h1 className="font-bold text-[#313131] pt-8 inline">Sale Price : ₹ {props.value.price}</h1>
      </div> </> :  <h1 className="font-bold text-[#313131] inline">MRP : ₹ {props.value.price}</h1>
      }
     
    </div>
  )
}

export default Items
