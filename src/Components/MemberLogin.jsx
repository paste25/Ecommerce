import React from 'react'
import Member2 from '../Assets/Member2.png'

const MemberLogin = () => {
  return (
    <div className=' h-screen flex justify-center items-center'>
      <div className=' flex h-fit items-center shadow-2xl rounded-xl'>
      <div>
        <img src={Member2} alt="Nike" />
      </div>
      <div className='max-w-md px-8'>
        <center>
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="135.5 361.38 1000 356.39">
  <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z"/>
   </svg>
   <h1 className='font-semibold text-3xl mt-8'>Enter Your Email To Join us or sign in.</h1>
   <input type="email" className='border-[0.5px] my-8 w-11/12 h-12 focus:outline-none p-2 rounded-lg ' placeholder='EMAIL' required/>
   <h1 className='text-[#6d6d6d] text-base font-normal'>By continuing, I agree to Website’s Privacy Policy and Terms of Use.</h1>
   <button className='text-white bg-black py-2 px-20 rounded-lg mt-5'>Continue</button>
   </center>
   </div>
   </div>
  </div>
  )
}

export default MemberLogin
