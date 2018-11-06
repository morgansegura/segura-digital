import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import AOS from 'aos';

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import HeadingBlock from '../components/ui/HeadingBlock'
import Panel from '../components/ui/Panel'

import 'aos/dist/aos.css'

export default class IndexPage extends Component {
  componentDidMount() {
    AOS.init();    
  }
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const panelHeaderData = {
      data: [{
        title: 'Blog Posts'
      }]
    }
    const servicesHeading = {
        title: 'What we can do for you',
        subtitle: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    }
    const blogHeading = {
        title: 'What we can do for you',
        subtitle: 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    }

    return (
      <Layout>
        <div className="pattern-wool">
          <Hero />
          <HeadingBlock headings={servicesHeading} />
          <Services />
          <section id="BlogArticles" 
            className="section bgimg iso-top-corners bgcolor--grey">
            <HeadingBlock headings={blogHeading} />          
            <div 
              className="container container-sm"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="false"               
            >
              <Panel header={panelHeaderData}>
                {posts
                  .map(({ node: post }) => (
                    <div className="panel__list-item" key={post.id}>
                      <div className="single__content">
                        <h2 className="post-list__title">
                          <Link className="has-text-primary" to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                        </h2>
                        <p className="single__date">
                          <strong>{post.frontmatter.date}</strong>
                          {post.frontmatter.author ? ` | ${post.frontmatter.author}` : null}
                        </p>
                        <p>
                          {post.excerpt}
                        </p>
                        <div className="flex justify-content-start">
                          <Link className="btn btn-sm btn-purple space-t" to={post.fields.slug}>
                            Keep Reading →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </Panel>            
            </div>
          </section>
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
