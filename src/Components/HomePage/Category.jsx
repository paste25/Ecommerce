import React, { useContext } from "react"
import HomepageBtn from "./HomepageBtn"
import { Link } from "react-router-dom"
import { products } from "../../Store/ProductStore"
const Category = ({item, btn}) => {

  const {handleLinkClick}=useContext(products)
  return (
    <div className=" lg:w-full lg:h-full sm:mx-5 relative sm:w-[450px] sm:my-5 lg:my-0 w-[330px] ">
      <Link to={item.link} onClick={handleLinkClick}>
      <div className="">
      <img src={item.img} alt="" className="lg:w-full h-2/4 rounded-md"/>
      </div>
      <div className="absolute ml-6 2xl:top-[73%] xl:top-[60%] lg:top-[46%] sm:top-[60%] top-[50%]">
      <h1 className="text-xl text-white">{item.title}</h1>
      <h1 className="text-3xl text-white">{item.tagline}</h1>
      <HomepageBtn btnValue={btn}></HomepageBtn>
      </div>
      </Link>
    </div>
  )
}

export default Category
