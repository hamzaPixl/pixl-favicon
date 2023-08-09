import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/cards/newsletter'
import Appointment from '../components/cards/appointment'
import Recruit from '../components/cards/recruit'
import Hero from '../components/hero/hero'
import About from '../components/hero/about'
import Faq from '../components/faq'

export default function Home() {
  return (
    <Layout>
      <Hero defaultImage='/images/hero-home.png' />
      <Newsletter />
      <Appointment />
      <About defaultImage='/images/hero-home.png' />
      <Recruit />
      <Faq />
    </Layout>
  )
}
