import React from 'react';
import Helmet from 'react-helmet';
// Components
import Header from './Header';
import Footer from './Footer';
import ContactModal from '../components/ui/ContactModal'
// Media
import '../assets/css/styles.css'

const TemplateWrapper = ({ children }) => {
  const metadata = {
    company: "The Brazilian Guys",
    title: "The Brazilian Guys",
    description: "Best Brazilian Food! -- San Diego, California. Established 2015.",
    keywords: "Gatsby.js, React.js, GraphQL, Netlify, NetlifyCMS, Gulp, PostCSS"
  }

  return (
    <div id="wrapper" className="wrapper is--mobile-nav">
      <Helmet
        title={metadata.title}
        meta={[
          { name: "description", content: metadata.description },
          { name: "keywords", content: metadata.keywords }
        ]}
      />
      <Header metadata={metadata} />
      <main metadata={metadata} className="main">
        {children}
      </main>
      <ContactModal />
      <Footer metadata={metadata} />
    </div>
  )
}
export default TemplateWrapper;
