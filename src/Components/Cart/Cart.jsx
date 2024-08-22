import React, { useContext, useEffect } from "react"
import { products } from "../../Store/ProductStore"
import CartItem from "./CartItem"
import Summary from "./Summary"
import { useNavigate } from "react-router-dom"
import ProductCarousel from "../Carousel/ProductCarousel"

function Cart() {
  let { cartList, calculate } = useContext(products)
  let navigate = useNavigate()
  const ProductCarouselMemo = React.memo(ProductCarousel)

  function guestCheckout() {
    if (cartList.length > 0) {
      navigate('/checkout')
    }
  }
  function memberCheckout() {
    if (cartList.length > 0) {
      navigate('/Member-login')
    }
  }

  useEffect(() => {
    calculate()
  }, [cartList])


  return (
    <>
      <div className="lg:flex justify-center">
        <div className="lg:pr-12 xl:min-w-80  min-w-60 mx-4 xl:mx-0">
          <div className="text-center lg:text-start">
            <h1 className="md:text-4xl text-3xl font-semibold">Bag</h1>
          </div>
          {cartList.length === 0 && <div className="text-center lg:text-start"><h1 className="mt-3">There is no item in your bag</h1></div>}
          {
            cartList.map((item, index) => (<CartItem item={item} key={item.id + index.toString()} calculate={calculate}></CartItem>))
          }
        </div>
        <Summary guestCheckout={guestCheckout} memberCheckout={memberCheckout}></Summary>
      </div>
      <div className="text-center lg:text-start">
        <h1 className='font-semibold md:text-4xl text-3xl ml-9 mb-6 mt-20'>You Might Also Like</h1>
        </div>
      <ProductCarouselMemo />
    </>
  )
}

export default Cart

