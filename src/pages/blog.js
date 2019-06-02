import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "MMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog"/>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {
          data.allContentfulBlogPost.edges.map((edge, id) => {
            return (
              <li className={blogStyles.post} key={id} >
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })
        }
      </ol>

    </Layout>
  )
}
export default BlogPage

// query {
//   allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }