import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ArrivalsSection from '../ArrivalsSection'
import HeroSection from '../HeroSection'
import ImagesSection from '../ImagesSection'
import PopularSection from '../PopularSection'
import VideoSection from '../VideoSection'

const Home = () => {
  useEffect(() =>{
      <Helmet>
        <title>Watch shop | eCommers</title>
      </Helmet>
  }, [])

  return (
    <div>
      <HeroSection/>
      <ArrivalsSection/>
      <ImagesSection/>
      <PopularSection/>
      <VideoSection/>
    </div>
  )
}

export default Home