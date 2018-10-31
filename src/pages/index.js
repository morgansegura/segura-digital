import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import HeadingBlock from '../components/ui/HeadingBlock'
import Panel from '../components/ui/Panel'
import ContactForm from '../components/forms/ContactForm'

export default class IndexPage extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const panelHeaderData = {
      data: [{
        title: 'Latest Posts'
      }]
    }
    const servicesHeading = {
        title: 'Latest Posts',
        subtitle: 'an interesting SEO rich subtitle'
    }

    return (
      <Layout>
        <div className="pattern-wool">
          <Hero />
          <HeadingBlock headings={servicesHeading} />
          <Services/>
          <section id="BlogArticles" className="section">            
            <Panel header={panelHeaderData} style={`small`}>
                {posts
                  .map(({ node: post }) => (
                    <div className="panel__list-item">
                      <div
                        className="blog-panel__content"
                        key={post.id}
                      >
                        <p>
                          <Link className="has-text-primary" to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                          <span> &bull; </span>
                          <small>{post.frontmatter.date}</small>
                        </p>
                        <p>
                          {post.excerpt}
                          <br />
                          <br />
                          <Link className="btn btn-sm btn-purple" to={post.fields.slug}>
                            Keep Reading →
                          </Link>
                        </p>
                      </div>
                    </div>
                ))}
            </Panel>
          </section>
          <section id="ContactForm" className="section container">
            <Panel>
              <div className="panel__list-item">
                <div className="panel__content">
                    <ContactForm />
                  </div>
              </div>
            </Panel>
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
