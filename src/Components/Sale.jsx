import React, { useContext } from 'react'
import { products } from '../Store/ProductStore'
import Items from './Items'
import SortByFilter from './SortByFilter'
import MemberBanner from './MemberBanner'

function Sale() { 
  let { sortedProducts }=useContext(products)
  return (
    <>
    <MemberBanner></MemberBanner>
    <SortByFilter/>
    <div className='grid grid-flow-row mb-10 2xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-2'>
      {sortedProducts.map(value=>value.sale && <Items value={value} key={value.id}></Items>)}
    </div>
    </>
  )
}

export default Sale
