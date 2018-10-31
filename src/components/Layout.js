import React from 'react'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'
import '../assets/css/styles.css'

const TemplateWrapper = ({ children }) => (
  <div className="wrapper">
    <Helmet title="Segura Web Design" />
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
)

export default TemplateWrapper
