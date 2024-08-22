import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Form = () => {
  let[messageBox, setMessageBox]=useState(false)
  return (
    <div className=' max-w-3xl'>
      <h1 className='bg-[#f0f0f0] text-lg  p-2'>SHIPPING</h1>
      <form action="" className='p-4'>
        <h1>Shipping Address</h1>
        <div className='mt-5'>
          <input type="text" placeholder='First Name' required className='w-[45%] border mr-3 p-2 rounded' />
          <input type="text" placeholder='Last Name' required className='w-[45%] border p-2 rounded' />
        </div>
        <div className='mt-5 flex w-[100%]'>
          <div className='w-[45%]'>
          <input type="email" placeholder='example@mail.com' required className='w-[100%] border p-2 rounded' />
          </div>
          <div className='w-[45%]  ml-3'>
          <PhoneInput country={'us'} inputStyle={{width: "100%", height:'40px', }} inputProps={{required: true}}/>
          </div>
        </div>
        <input type="text" placeholder='Street Address' required className='w-[92%] border p-2 rounded mt-5' />
        <input type="text" placeholder='APT/Street/Unit' required className='w-[92%] border p-2 rounded mt-5' />
        <div className='mt-5'>
          <input type="text" placeholder='City' required className='w-[45%] border mr-3 p-2 rounded' />
          <input type="text" placeholder='State' required className='w-[45%] border p-2 rounded' />
        </div>
        <input type="text" placeholder='Postal Code' required className='w-[45%] border p-2 rounded block mt-5' />
        <div className='mt-6'>
          <h1 className='font-semibold'>Gift Options</h1>
          <input type="checkBox" className='mr-2' value={messageBox} onChange={()=>{setMessageBox(!messageBox)}}/><label htmlFor="gift">This is a Gift</label>
        </div>
        {messageBox ? <><textarea type="text" placeholder='Personal Message (optional)' className='w-[92%] h-32 border p-2 rounded mt-5'/></>: ''}
        <div className='flex justify-center items-center mt-5 '>
          <div className='shadow-md py-4 px-12'>
            <center> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-gift" viewBox="0 0 16 16">
              <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
            </svg></center>
            <p>We hide the prices and print personal message on the packing slip if you include one</p>
          </div>
        </div>
        <button className='mt-5 ml-[62%] border py-2 px-20 bg-black text-white rounded-md'>Continue</button>
      </form>
      <h1 className='bg-[#f0f0f0] text-lg  p-2 mb-8'>PAYMENT</h1>
    </div>
  )
}

export default Form
