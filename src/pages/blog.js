import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = ({pageContext: { locale }}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogues(sort: { fields: publicationDate, order: DESC }) {
        edges {
          node {
            titre
            publicationDate(formatString: "MMM Do, YYYY")
            slug
            summary { summary }
          }
        }
      }
    }
  `)

  return (
    <Layout path="/" locale={locale}>
      <Head title="Blog"/>
      <section className={blogStyles.section} >
        <h1>Nouvelles</h1>
        <div className={blogStyles.mainContainer} >
          {
            data.allContentfulBlogues.edges.map((edge, id) => {
              return (
                <article className={blogStyles.articleContainer} key={id} >
                  <header>
                    <h2>{edge.node.titre}</h2>
                    <p>{edge.node.publicationDate}</p>
                  </header>
                  <p>{edge.node.summary.summary}</p>
                  <Link to={`/blog/${edge.node.slug}`}>Read more</Link>
                </article>
              )
            })
          }
        </div>
      </section>
    </Layout>
  )
}
export default BlogPage
