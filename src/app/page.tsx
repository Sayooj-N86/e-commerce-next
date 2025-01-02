import React from 'react'
import Kerosal from './_components/Kerosal'
import Categories from './_components/Categories'
import Featureproducts from './_components/Featureproducts'


const page = () => {
  return (
    <div className='pt-[6.1rem]'>
      
      <Kerosal />
      <Categories />
      <Featureproducts/>
    </div>
  )
}

export default page