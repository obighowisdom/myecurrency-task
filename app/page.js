import About from '@/components/About'
import Hero from '@/components/Hero-section/Hero'
import React from 'react'
import Carousel from '@/components/Review'
import ShopNow from '@/components/ShopNow'
import Mission from '@/components/Mission'
import CTA from '@/components/CTA'
import ProductReview from '@/components/ProductReview'

const page = () => {
  return (
    <div className='w-full'>
      <Hero />
      <About />
      <Carousel />
      <ShopNow />
      <Mission />
      <CTA />
      <ProductReview />
    </div>
  )
}

export default page