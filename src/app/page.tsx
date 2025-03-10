import React from 'react'
import Kerosal from './_components/Kerosal'
import Categories from './_components/Categories'
import Featureproducts from './_components/Featureproducts'
import { frontendApi } from '@/api/api'

const homepage = async () => {
 const response= await frontendApi.homepageApi()
 return response.data.data
}

const page = async () => {
  const res = await homepage()
  const banners = res.banners
  const categories = res.categories
  const featureproducts = res.featuredproduct

  return (
    <div className='pt-[6.1rem]'>
      
      <Kerosal gallery = {banners} />
      <Categories Categories = {categories}/>
      <Featureproducts products ={featureproducts}/>
    </div>
  )
}

export default page