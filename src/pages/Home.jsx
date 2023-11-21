import React from 'react'
import Text from '../components/Text'
import Foot from '../components/Foot'
import Hero from '../components/Home/Hero'
import Trending from '../components/Home/Trending'
import Latest from '../components/Home/Latest'
import ContactUs from '../components/Home/ContactUs'
import ReadyToMake from '../components/Home/ReadyToMake'

const Home = () => {
  return (
    <div >
      {/* <Text/> */}
      <Hero/>
      <Trending/>
      <Latest/>
      <ContactUs/>
      <Foot/>
    </div>
  )
}

export default Home