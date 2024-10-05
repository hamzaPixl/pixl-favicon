import React from 'react'
import SEO from './seo'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Header />
      {children}
      <Footer />
    </>
  )
}
