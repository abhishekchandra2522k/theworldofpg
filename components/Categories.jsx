import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className='bg-white text-black shadow-lg rounded-lg p-4 mb-4 pb-4 flex flex-col items-center'>
      <h3 className='text-xl mb-4 font-semibold border-b pb-2'>Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='transition duration-500 cursor-pointer bg-gray-200 rounded-full block px-3 py-2 mb-3 hover:bg-gray-800 hover:text-white'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
