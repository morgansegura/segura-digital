import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AOS from 'aos';

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import 'aos/dist/aos.css'

export default class IndexPage extends Component {
  componentDidMount() {
    AOS.init();    
  }
  render() {

    return (
      <Layout>
        <Hero />        
    
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMM YYYY")
            author
          }
        }
      }
    }
  }
`
