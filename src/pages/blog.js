import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import Head from '../components/head'
import SEO from '../components/seo'
import Hero from '../components/hero'
import LocalizedLink from '../components/localizedLink'
import labels from '../constants/blogs'


const BlogPage = ({pageContext: { locale, langtag }, data}) => {

  const path = '/blog'

  // translation rendering helper function
  const t = (label) => labels[label][langtag]

  const seoData = {
    title: t('seoNewsTitle').concat(' | Les Échos du Pacifique'),
    meta: [
      { name: 'title', content: t('seoMetaTitleContent').concat(' | Les Échos') },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://res.cloudinary.com/danielmeilleurimg/image/upload/v1571906764/echos/hero/groupe_de_face.jpg' }
    ],
    description: t('seoDescription'),
    // description: typeof futureConcerts[0] !== 'undefined' && futureConcerts[0].node.seoDescription
    //   ? futureConcerts[0].node.seoDescription.seoDescription
    // : null,
    locale,
    path
  }

  return (
    <Layout path="/blog" locale={locale} langtag={langtag}>
      
      <SEO {...seoData}
        // title={labels.news[langtag]}
        // title={t('seoNewsTitle').concat(' | Les Échos du Pacifique')}
        // meta={[ {name: 'title', content: t('seoMetaTitleContent').concat(' | Les Échos')} ]}
      />
      
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
                      <h2 className="title is-5 is-marginless">
                        {edge.node.titre}</h2>
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