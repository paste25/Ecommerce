import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = ({handelHamburger}) => {
  return (
      <ul className="space-x-4 cursor-pointer md:flex text-center text-white">
        <li><Link to='/new&featured' onClick={handelHamburger}>New & Featured</Link></li>
        <li><Link to='/mens' onClick={handelHamburger}>Men</Link></li>
        <li><Link to='/womens' onClick={handelHamburger}>Women</Link></li>
        <li><Link to='/kids' onClick={handelHamburger}>Kids</Link></li>
        <li><Link to='/sale' onClick={handelHamburger}>Sale</Link></li>
      </ul>
  )
}

export default Navlink
