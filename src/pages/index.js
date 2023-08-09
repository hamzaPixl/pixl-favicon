import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/cards/newsletter'
import Appointment from '../components/cards/appointment'
import Recruit from '../components/cards/recruit'

export default function Home() {
  return (
    <Layout>
      <Newsletter />
      <Appointment />
      <Recruit />
    </Layout>
  )
}
