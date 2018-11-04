import React from 'react'
import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  </div>
)

export default TemplateWrapper
