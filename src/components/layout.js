import React, { useState } from 'react'
import SEO from './seo'
import Footer from './footer'
import Header from './header'
import CookieBanner from './banners/cookie'

export default function Layout({ children }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <main>
        <SEO />
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        {children}
        <Footer />
        <CookieBanner />
      </main>
    </>
  )
}
