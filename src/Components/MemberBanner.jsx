import React from 'react'
import { Link } from 'react-router-dom'

const MemberBanner = () => {
  return (
    <div className='bg-[#f7f7f7] flex justify-center items-center border-b-[1px] py-2'>
      <div className='text-center text-lg font-medium mx-4'>
      <h1>Move, Shop, Customise & </h1>
      <h1>Celebrate With Us.</h1>
      </div>
      <div  className='text-center text-sm mx-4'>
      <h1>No matter what you feel like doing today,</h1>
      <h1>It’s better as a Member.</h1>
      <Link to={'/Member-login'}><button className='hover:border-black border-b-[1px]'>Join Us</button></Link>
      </div>
    </div>
  )
}

export default MemberBanner
