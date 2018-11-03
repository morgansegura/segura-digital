import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import DisqusThread from '../components/DisqusThread'
import Panel from '../components/ui/Panel'

export const BlogListTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    postId,
    date,
    postData

}) => {
    const PostContent = contentComponent || Content
    const commentHeader = {
        data: [{
            title: 'Comments'
        }]
    }
    const tagHeader = {
        data: [{
            title: 'Tags'
        }]
    }
    const moreHeader = {
        data: [{
            title: 'More Posts'
        }]
    }
    console.log(document)

    return (
        <div className="single bgcolor-grey pattern-wool">

            <section className="section single__block">

                <Helmet title={`${title} | Blog`}>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-okaidia.min.css"></link>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.min.js" defer="true"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js" defer="true"></script>
                </Helmet>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 single__content-block">
                            <div className="single__content">
                                <h1 className="single__title">
                                    {title}
                                </h1>
                                <p className="single__date">{date}</p>
                                <p className="single__description">{description}</p>
                                <PostContent content={content} />
                            </div>

                            <Panel header={commentHeader} classList={`panel`}>
                                <div className="panel__list-item">
                                    <DisqusThread
                                        id={postId}
                                        title={title}
                                        path={window.location.href}
                                    />
                                </div>
                            </Panel>
                        </div>

                        <aside className="aside col-12 col-md-4 p-y-lg">

                            {tags && tags.length ? (
                                <Panel header={tagHeader} classList={`panel`}>
                                    <div className="panel__list-item">
                                        <div className="list">
                                            {tags.map(tag => (
                                                <p key={tag + `tag`} className="item-row">
                                                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                                </p>
                                            )) /* [/tags.map] */}
                                        </div>
                                    </div>
                                </Panel>
                            ) : null /* [/tags] */}

                            {postData && postData.length ? (
                                <Panel header={moreHeader} classList={`panel`}>
                                    <div className="panel__list-item">
                                        {postData.map(({ node: more }, i) => (
                                            <div key={i} className="list list-column">
                                                {more.id !== postId ? (
                                                    <h4 className="item-stack">
                                                        <Link to={`/${more.fields.slug}/`}>{more.frontmatter.title}</Link>
                                                    </h4>
                                                ) : null /* [/more.id] */}
                                            </div>
                                        )) /* [/postData.map] */}
                                    </div>
                                </Panel>
                            ) : null /* [/postData] */}

                        </aside>
                    </div>
                </div>
            </section>
        </div>
    )
}

BlogListTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.instanceOf(Helmet),
}

const BlogList = ({ data }) => {
    const { markdownRemark: post } = data
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Layout>
            <BlogListTemplate
                postId={post.id}
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                // helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                postData={posts}

            />
        </Layout>
    )
}

BlogList.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default BlogList

export const pageQuery = graphql`
  query BlogListByID($id: String!) {
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog" } }}
    ) {
      edges {
        node {
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
