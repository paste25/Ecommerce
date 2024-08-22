import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Error from './Error'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { products } from '../../Store/ProductStore'

const Productdesc = ({singleProduct}) => {
  let{addProduct, cartList, updateQuantity}=useContext(products);
  let [size, setSize] = useState()
  let[isSizeSelected, setIsSizeSelected]=useState(true);
  let [isPop, setIsPop] = useState(false)
  let errorDialogue="Not Allowed!";
  let errorDescription= "Your are not allowed to order more quantities";
  let errorParagraph = "We apologies but as per our policies one customer can only order upto 5 quantites of one size per head";

  const handelSizeButton = (size) => {
    setSize(size)
    setIsSizeSelected(true)
  }

  function handelAddButton(){
    if(size==undefined){
      setIsSizeSelected(false)
    }
    else{
      let index=cartList.findIndex(value=>value.id==singleProduct.id && value.selected_size===size)
      if(index !== -1){ 
        if(cartList[index].selected_quantity<5){
        let updatedCartList= cartList.map((item, i)=> i===index ? {...item,selected_quantity:item.selected_quantity+1 ,total_amount : item.price *(item.selected_quantity+1)}  : item)
        updateQuantity(updatedCartList)
        setSize()
        }
        else{
          setSize()
          setIsPop(true)
        }
      }
      else{
        const productToAdd = {...singleProduct, selected_size: size, selected_quantity : 1, total_amount : Number(singleProduct.price)}
        addProduct(productToAdd)
        setSize()
      }
    }
  }
function handelErrorPopup(){
  setIsPop(false)
}
  return (
    <div className='lg:ml-6 lg:max-w-md flex-col justify-center flex mx-3 mt-3'>
        {isPop && <Error handelErrorPopup={handelErrorPopup} errorDialogue={errorDialogue} errorDescription={errorDescription} errorParagraph={errorParagraph}></Error>}
        <div className='items-center flex flex-col lg:block'>
        <h1 className='text-2xl font-semibold'>{singleProduct.name}</h1>
        <h1 className='text-[#5f5f5f] font-semibold'>{singleProduct.category}</h1>
        {singleProduct.sale ? <div className='mt-6'> <h1 className='inline line-through font-semibold'>MRP : ₹{singleProduct.old_price}</h1>
        <h1 className='font-semibold inline pl-7'>Sale : ₹ {singleProduct.price}</h1></div> :
        <h1 className='font-semibold mt-6'>MRP : ₹ {singleProduct.price}</h1>}
        <h1 className='text-[#5f5f5f]'>incl. of taxes (Also includes all applicable duties)</h1>
        </div>
        <h1 className='font-bold mt-6'>Select Size</h1>
        <div className={`grid grid-cols-3 gap-2 p-1 ${!isSizeSelected &&  'border border-red-600 ' }`}> 
          {singleProduct.sizes.map((value, i) => <button className={`border py-3 px-1 font-medium rounded ${size === value && 'border-2 border-black'}`} key={i} value={value} onClick={() => handelSizeButton(value)}>UK {value}</button>)}
        </div>
        {!isSizeSelected && <h1 className='text-red-600'>Please Select Size</h1>}
        <center><button className='block bg-black text-white w-[100%] py-3 rounded-3xl font-semibold mt-6' onClick={()=>handelAddButton()} >Add to Bag</button></center>
        <h1 className='mt-12 font-semibold'>Ready to turn heads? Step into the AJ1. New colours and fresh textures update this all-time favourite without losing its classic look and familiar feel. Made from premium materials, pumped with comfortable Air cushioning and decked out with subtle accents, it's a staple sneaker ready for today's world.</h1>
        
        <Disclosure as="div" className="border-b-[0.5px] py-4 mt-10" defaultOpen={false} >
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-2xl font-medium ">
              Delivery & Return
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel transition className="origin-top transition duration-200 ease-in-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 mt-2 font-medium leading-[4rem]">
            <p>All purchases are subject to delivery fees.</p>
            <p className='leading-normal'>Standard delivery 4–9 business days Orders are processed and delivered Monday–Friday (excluding public holidays).</p>
            <p>Exclusive Members enjoy free returns.</p>
          </DisclosurePanel>
        </Disclosure>
        
        <Disclosure as="div" className="border-b-[0.5px] py-4" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-2xl font-medium ">
              Product Information
            </span>
            <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel transition className="mt-2 font-medium leading-[4rem] origin-top transition duration-200 ease-in-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
            <p >Declaration : Direct import by the individual customer.</p>
            <p className='leading-normal'>Marketed by: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eveniet ipsum magni saepe aliquam ut impedit magnam, nesciunt ipsa minus.</p>
            <p className='font-bold'>Net Quantity: 1 Pair</p>
          </DisclosurePanel>
        </Disclosure>
      </div>
  )
}

export default Productdesc
