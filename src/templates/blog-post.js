import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import CommentForm from '../components/forms/CommentForm'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,

}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="single pattern-wool">
      <section className="section single__block">

        <Helmet title={`${post.frontmatter.title} | Blog`}>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-okaidia.min.css"></link>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.min.js"></script>         
          <script src="https://just-comments.com/w.js" type="text/javascript" defer="true"></script>
        </Helmet>
        <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="single__content">
                  <h1 className="single__title">
                    {title}
                  </h1>
                  <p className="single__date">{date}</p>
                  <p className="single__description">{description}</p>
                  <PostContent content={content} />
                </div>
              </div>

              <aside className="aside col-12 col-md-4 p-y-lg">              
                {tags && tags.length ? (
                  <div className="aside__inner">
                    <div className="aside__header">
                      <h4>Tags</h4>
                    </div>
                    <ul className="aside__body">
                      {tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="aside__inner comments">
                  <div className="aside__header">
                    <h4>Comments</h4>
                  </div>
                  <div className="container">
                    <CommentForm />
                  </div>
                </div>              
              </aside>
            </div> 
          </div>
      </section>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        // helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
