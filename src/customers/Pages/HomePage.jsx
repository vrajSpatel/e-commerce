import React from 'react'
import MainCarousel from '../Component/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../Component/HomeSectionCarousel/HomeSectionCarousel'

function HomePage() {
  return (
    <div>
      <MainCarousel/>

      <div className='py-20 space-y-10 px-5 lg:px-10'>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
      </div>
    </div>
  )
}

export default HomePage
