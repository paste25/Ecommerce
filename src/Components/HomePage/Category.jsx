import React, { useContext } from "react"
import HomepageBtn from "./HomepageBtn"
import { Link } from "react-router-dom"
import { products } from "../../Store/ProductStore"
const Category = ({item, btn}) => {

  const {handleLinkClick}=useContext(products)
  return (
    <div className=" lg:w-full lg:h-full sm:mx-5 relative sm:w-[450px] sm:my-5 lg:my-0 h-[90%] mt-4">
      <Link to={item.link} onClick={handleLinkClick}>
      <img src={item.img} alt="" className="lg:w-full lg:h-2/4 rounded-md"/>  
      <div className="absolute ml-6 2xl:top-[73%] xl:top-[60%] lg:top-[46%] sm:top-[60%] top-[50%]">
      <h1 className="sm:text-xl text-lg  text-white">{item.title}</h1>
      <h1 className="sm:text-3xl text-xl text-white">{item.tagline}</h1>
      <HomepageBtn btnValue={btn}></HomepageBtn>
      </div>
      </Link>
    </div>
  )
}

export default Category
