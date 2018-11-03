import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'


export default class BlogPage extends Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>    
        <section id="BlogList" className="section single bgcolor-grey pattern-wool">
          <Helmet title={`All posts | Blog`}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-okaidia.min.css"></link>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.min.js" defer="true"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js" defer="true"></script>
          </Helmet>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 single__content-block">
                <div className="single__content">
                  {posts
                    .map(({ node: post }) => (
                      <div key={post.id}>
                      { post.id === 0 ?
                        <h1 className="single__title no-border">
                          <Link className="has-text-primary" to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                        </h1>
                      : 
                        <h2 className="single__title no-border">
                          <Link className="has-text-primary" to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                        </h2>
                      }
                        <p className="single__date">
                          {post.frontmatter.date} by {post.frontmatter.author}
                        </p>
                        <p>
                          {post.excerpt}
                        </p>
                        <div className="flex justify-content-end">
                          <Link className="btn btn-sm btn-purple" to={post.fields.slug}>
                            Keep Reading →
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <aside className="aside col-12 col-md-4">

              </aside>
            </div>
          </div>
        </section>        
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
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
            author
          }
        }
      }
    }
  }
`
