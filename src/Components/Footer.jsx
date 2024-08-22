import React from 'react'

function Footer() {
  return (
    <div className='bg-[#1f1f21] text-[#9fa6ad] min-h-72'>
      <hr className='text-[#9fa6ad]'/>
    <div className='md:grid md:grid-flow-col md:justify-evenly md:ml-0 pt-6 ml-10'>
      <ul>
        <li className='font-bold md:pb-6 pb-2'>HELP</li>
        <li>Get Help</li>
        <li>Order Status</li>
        <li>Delivery</li>
        <li>Return</li>
        <li>Payment Options</li>
        <li>Contact Us On All Other Inquiries</li>
      </ul>
      <ul>
      <li className='font-bold md:pb-6 mt-6 pb-2'>ONLINE SHOPPING</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Sale</li>
        <li>New & Featured</li>
      </ul>
      <ul>
      <li className='font-bold md:pb-6 mt-6 pb-2'>COMPANY</li>
        <li>About</li>
        <li>News</li>
        <li>Career</li>
        <li>Investors</li>
        <li>Sustainability</li>
      </ul>
      </div>
      <center className='mt-7'><p>© 2024 , Inc. All rights reserved</p></center>
    </div>
  )
}

export default Footer
