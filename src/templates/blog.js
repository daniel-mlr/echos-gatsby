import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
// import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
// import blogStyles from './blog.module.scss'

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogues(slug: {eq: $slug}) {
      titre
      publicationDate(formatString: "MMMM Do, YYYY")
      slug
      body { json }
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
  console.log('data:', data.contentfulBlogues.slug)
  return (
    <Layout path={`/blog/${data.contentfulBlogues.slug}`} locale={locale}>
      <Head title={data.contentfulBlogues.titre}/>

      <section className={''} >
        <h1>Nouvelles</h1>
        <div className={''} >
          <article className={''} >
            <header>
              <h2>{data.contentfulBlogues.titre}</h2>
              <p>{data.contentfulBlogues.publicationDate}</p>
            </header>
            {documentToReactComponents(data.contentfulBlogues.body.json, options)}
            <Link to={'/blog'}>Retour</Link>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
