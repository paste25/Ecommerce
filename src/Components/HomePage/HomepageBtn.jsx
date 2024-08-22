import React from 'react'

const HomepageBtn = ({btnValue, isHeadingBtn}) => {
  return (
    <button className={`mt-3  py-2 px-6 rounded-3xl mr-3 font-semibold ${isHeadingBtn ? 'bg-black text-white': 'bg-white' }`}>{btnValue}</button>
  )
}

export default HomepageBtn
