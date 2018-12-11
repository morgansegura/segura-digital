import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AOS from 'aos';

import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default class IndexPage extends Component {
  componentDidMount() {
    AOS.init();    
  }
  render() {

    return (
      <Layout>
        <Hero />

        <div>
          <h1>Features</h1>
          <h3>Icons & Animation Libraries</h3>
          <p>Animate on Scroll</p>
          <p>Material Design Icons</p>

          <h3>UI Components</h3>
          <p>Reusable, Extendable React Modal Component</p>
          <p>React Tabs</p>

        </div>
        
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
