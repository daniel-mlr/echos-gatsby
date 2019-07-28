import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
// import blogStyles from './blog.module.scss'
import Head from '../components/head'
import Hero from '../components/hero'


const BlogPage = ({pageContext: { locale }}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogues(sort: { fields: publicationDate, order: DESC }) {
        edges {
          node {
            titre
            publicationDate(formatString: "MMM Do, YYYY")
            slug
            previewPicture {
              title
              description
              fixed(width: 96, height:96) {
                ...GatsbyContentfulFixed
              }
            }
            summary { summary }
          }
        }
      }
      file(name: {eq: "Choir_groupshot_1920X592"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1366) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout path="/blog" locale={locale}>
      <Head title="Blog"/>
      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        title={'Nouvelles'}
      />
      <section className="section" style={{'paddingTop': 0}}>
        <div className="container is-desktop">
          {
            data.allContentfulBlogues.edges.map((edge, id) => {
              return (
                <article className="media" key={id} >
                  <figure className="media-left">
                    <div className="image is-96x96">
                      <Img
                        fixed={edge.node.previewPicture.fixed}
                        alt={edge.node.previewPicture.description}
                      />
                    </div>
                  </figure>
                  <div className="media-content">
                    <h3 className="title is-5 is-marginless">{edge.node.titre}</h3>
                    <p className="is-italic">{edge.node.publicationDate}</p>
                    <p>{edge.node.summary.summary}</p>
                    <Link to={`/blog/${edge.node.slug}`}>Read more</Link>
                  </div>
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
