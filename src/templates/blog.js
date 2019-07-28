import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
// import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
// import blogStyles from './blog.module.scss'
import Hero from '../components/hero'

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogues(slug: {eq: $slug}) {
      titre
      publicationDate(formatString: "MMMM Do, YYYY")
      slug
      body { json }
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
const Blog = ({pageContext: { locale }, data}) => {
  const options = {
    renderNode: {
      // eslint-disable-next-line react/display-name
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        // console.log('node',node)
        return <img alt={alt} src={url}/>
      },
    }
  }
  // console.log('data:', data.contentfulBlogues.slug)
  return (
    <Layout path={`/blog/${data.contentfulBlogues.slug}`} locale={locale}>
      <Head title={data.contentfulBlogues.titre}/>
      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        // title={data.contentfulBlogues.titre}
      />

      <section className="section" style={{'paddingTop': 0}}>
        <div className="content">
          {/* <h1>Nouvelles</h1> */}
          <div className={''} >
            <article className={''} >
              <header>
                <h2>{data.contentfulBlogues.titre}</h2>
                <p className="is-italic">{data.contentfulBlogues.publicationDate}</p>
              </header>
              {documentToReactComponents(data.contentfulBlogues.body.json, options)}
              <div className="tags">
                <Link className="tag is-primary" to={'/blog'}>Liste des nouvelles</Link>
                <Link className="tag" to={'/'}>Accueil</Link>
              </div>
            </article>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Blog