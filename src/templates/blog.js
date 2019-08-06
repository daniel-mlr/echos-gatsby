import React from 'react'
import { graphql } from 'gatsby'
import LocalizedLink from '../components/localizedLink'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import Head from '../components/head'
import Hero from '../components/hero'

const Blog = ({pageContext: { locale, langtag }, data}) => {
  console.log('@@@@', {langtag}, data)
  const options = {
    renderNode: {
      // eslint-disable-next-line react/display-name
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      },
    }
  }

  return (
    <Layout
      path={`/blog/${data.contentfulBlogues.slug}`}
      locale={locale} langtag={langtag}
    >
      <Head title={data.contentfulBlogues.titre} />
      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        // title={data.contentfulBlogues.titre}
      />

      <section className="section" style={{'paddingTop': 0}}>
        <div className="content">
          {/* <h1>Nouvelles</h1> */}
          <div className={''} >
            <article className={''} >
              <header className="content">
                <h2>{data.contentfulBlogues.titre}</h2>
                <p className="is-italic">
                  {data.contentfulBlogues.publicationDate}
                </p>
              </header>
              <div 
                className="content is-pulled-left"
                style={{margin: '0 1rem 1rem 0'}}
              >
                <Img 
                  fixed={data.contentfulBlogues.previewPicture.fixed}
                  alt={data.contentfulBlogues.previewPicture.description}
                />
              </div>
              {documentToReactComponents(
                data.contentfulBlogues.body.json,
                options)}
              <div className="tags">
                {/* <Link className="tag is-primary" to={'/blog'}>Liste des nouvelles</Link> */}
                <LocalizedLink
                  className="tag is-primary"
                  to={'/blog'}
                >Liste des nouvelles</LocalizedLink>
                {/* <Link className="tag" to={'/'}>Accueil</Link> */}
                <LocalizedLink className="tag" to={'/'}>Accueil</LocalizedLink>
              </div>
            </article>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ( 
    $slug: String!
    $langtag: String!  
  ) 
  { 
    contentfulBlogues(
      slug: {eq: $slug}
      node_locale: {eq: $langtag}
    ) {
      titre
      publicationDate(formatString: "MMMM Do, YYYY")
      slug
      body { json }
      previewPicture {
        title
        description
        fixed(width: 96, height:96) {
          ...GatsbyContentfulFixed
        }
      }
    }
    file(name: {eq: "noel_tricities-1920x592"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1366) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Blog
