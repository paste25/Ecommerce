import React from 'react'

const HomepageBtn = ({btnValue, isHeadingBtn}) => {
  return (
    <button className={`mt-3 py-2 sm:px-6 px-4 rounded-3xl mr-3 sm:text-base text-sm font-semibold ${isHeadingBtn ? 'bg-black text-white': 'bg-white' }`}>{btnValue}</button>
  )
}

export default HomepageBtn
