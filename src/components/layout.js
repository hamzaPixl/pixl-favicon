import React from 'react'
import SEO from './seo'
import Footer from './footer'
import Header from './header'
import Container from './container'

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
