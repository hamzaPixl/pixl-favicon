import React, { useState } from 'react'
import SEO from './seo'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <main>
        <SEO />
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        {children}
        <Footer />
      </main>
    </>
  )
}
