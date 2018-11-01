import React from 'react'
import Helmet from 'react-helmet'
import ContactModal from './ui/ContactModal'

import Header from './Header'
import Footer from './Footer'
import '../assets/css/styles.css'

const TemplateWrapper = ({ children }) => (
  <div className="wrapper">
    <Helmet title="Segura Web Design" />
    <Header />
    <main className="main">{children}</main>
    <Footer />
    <ContactModal />
  </div>
)

export default TemplateWrapper
