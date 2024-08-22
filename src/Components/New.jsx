import {useContext}  from 'react'
import { products } from '../Store/ProductStore'
import SortByFilter from './SortByFilter'
import MemberBanner from './MemberBanner'
import Items from './Items'

function New() {

  let { sortedProducts }=useContext(products)
  return (
    <>
    <MemberBanner></MemberBanner>
    <SortByFilter/>
    <div className='grid grid-flow-row mb-10 2xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-2'>
      {sortedProducts.map(value=> value.new === true &&   <Items value={value} key={value.id}></Items>)}
    </div>
    </>
  )
}

export default New
