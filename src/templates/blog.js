import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

export const query = graphql`
  query ($slug: String) {
    contentfulBlogues(slug: {eq: $slug}) {
      titre
      publicationDate(formatString: "MMMM Do, YYYY")
      body { json }
    }
  }
`
const Blog = (props) => {
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
    <Layout>
      <Head title={props.data.contentfulBlogues.tirle}/>
      <h1>{props.data.contentfulBlogues.titre} </h1>
      <p>{props.data.contentfulBlogues.publicationDate} </p>
      { documentToReactComponents(props.data.contentfulBlogues.body.json, options)}
    </Layout>
  )
}
Blog.propTypes = {
  data: PropTypes.object,
}
export default Blog