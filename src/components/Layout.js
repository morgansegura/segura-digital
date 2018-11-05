import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Header from './Header'
import Footer from './Footer'
import ContactModal from '../components/ui/ContactModal'
import '../assets/css/styles.css'


library.add(faTimes)
const TemplateWrapper = ({ children }) => (
  <div> 
    <div className="wrapper">      
      <Helmet title="Segura Web Design" />
      <Header />      
      <main className="main">{children}</main>
      <Footer />    
    </div>
    <ContactModal />
    <nav className="navigation-main">
      <Link className="link" to="/work">Our Work</Link>
      <Link className="link" to="/pricing">Pricing</Link>
      <Link className="link" to="/blog">Blog</Link>
      <Link className="link" to="/about">About</Link>
    </nav>    
  </div>
)

export default TemplateWrapper
