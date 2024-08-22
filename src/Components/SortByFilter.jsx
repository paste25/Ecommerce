import React from 'react'
import { products } from '../Store/ProductStore';
import { useContext } from 'react';

const SortByFilter = () => {
  const { setFilter } = useContext(products);
  return (
    <div className='flex justify-end mr-5 mt-2'>
      <select  className='text-lg  bg-white cursor-pointer focus: outline-none'  onChange={(e) => setFilter(e.target.value)}>
        <option defaultValue="default">Sort By : Default</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="lowToHigh">Price: Low to High</option>
      </select>
    </div>
  )
}

export default SortByFilter
