import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import ContactModal from '../components/ui/ContactModal'
import '../assets/css/styles.css'

const TemplateWrapper = ({ children }) => (
  <div> 
    <div className="wrapper">      
      <Helmet title="Segura Web Design" />
      <Header />      
      <main className="main">{children}</main>
      <Footer />    
    </div>
    <ContactModal /> 
  </div>
)

export default TemplateWrapper
