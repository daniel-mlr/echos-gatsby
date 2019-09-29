import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Head from '../components/head'
import Hero from '../components/hero'
import LocalizedLink from '../components/localizedLink'
import labels from '../constants/blogs'


const BlogPage = ({pageContext: { locale, langtag }, data}) => {

  return (
    <Layout path="/blog" locale={locale} langtag={langtag}>
      <Head title={labels.news[langtag]}/>
      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        title={labels.news[langtag]}
      />
      <section className="section" style={{'paddingTop': 0}}>
        <div className="container is-desktop">
          {
            data.blog.edges.map((edge, id) => {
              
              return ( // blog media card
                <article className="media" key={id} >
                  
                  {/* left side thumbnail */}
                  <LocalizedLink to={`/blog/${edge.node.slug}`}>
                    <figure className="media-left">
                      <div className="image is-96x96">
                        <Img
                          fixed={edge.node.previewPicture.fixed}
                          alt={edge.node.previewPicture.description}
                        />
                      </div>
                    </figure>
                  </LocalizedLink>
                  
                  <div className="media-content">
                    
                    {/* title  */}
                    <LocalizedLink to={`/blog/${edge.node.slug}`}>
                      <h3 className="title is-5 is-marginless">
                        {edge.node.titre}</h3>
                    </LocalizedLink>
                    
                    {/* date */}
                    <p className="is-italic">{edge.node.publicationDate}</p>
                    
                    {/* summary */}
                    <p>{edge.node.summary.summary}</p>
                    
                    {/* link */}
                    <LocalizedLink to={`/blog/${edge.node.slug}`}
                    >{labels['readMore'][langtag]}</LocalizedLink>
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

export const query = graphql`
query ($langtag: String = "fr-CA"){
  blog:allContentfulBlogues(
    filter: {node_locale: { eq: $langtag }}
    sort: { fields: publicationDate, order: DESC }
    # limit: 4
  ) {
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
`
export default BlogPage