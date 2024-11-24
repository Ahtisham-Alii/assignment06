import React from 'react'
import Header from '@/components/Header'
import Headerr from '@/components/Headerr'
import Hero from '@/components/Hero'
import Banner from '@/components/Banner'
import Courses from '@/components/Courses'
import Bannerr from '@/components/Bannerr'
import Course from '@/components/Course'
import Team from '@/components/Team'
import Testimonals from '@/components/Testimonals'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main>
      <Headerr/>
      <Header/>
      <Hero/>
      <Banner/>
      <Courses/>
      <Bannerr/>
      <Course/>
      <Team/>
      <Testimonals/>
      <Footer/>
    </main>
  )
}

export default Home