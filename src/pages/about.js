import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Head from '../components/head'
// import LocalizedLink from '../components/localizedLink'
// import labels from '../constants/blogs'

const AboutPage = ({pageContext: { locale, langtag }, data }) => {

  // flatten edges by removing the node layer, to obtain an array of objects
  const dataMap = data.about.edges.map((edge) => edge.node)
  
  // transform an array of objects into an object with keynames
  // corresponding to the string in keyField property of each objects
  const arrayToObject = (arr, keyField) =>
    arr.reduce((obj, item) => {
      obj[item[keyField]] = item
      return obj
    }, {})
  
  // all the tiles content, each identified by their tileName
  const tiles = arrayToObject(dataMap, 'tileName')

  return (
    <Layout path="/about" locale={locale} langtag={langtag}>
      <Head title="About"/>
      <section className="section" style={{'paddingTop': 0}} >
        
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification has-background-grey-lighter">

              <h2 className="title">{tiles.theChoir.title}</h2>
              <h3 className="subtitle">{tiles.theChoir.sousTitre}</h3>
              {documentToReactComponents(tiles.theChoir.corps.json)}
              
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <h2 className="title">{tiles.rehearsals.title}</h2>
                  <h3 className="subtitle">{tiles.rehearsals.sousTitre}</h3> 
                  {documentToReactComponents(tiles.rehearsals.corps.json)}
                </article>
                <article className="tile is-child notification is-warning">
                  <h2 className="title">...tiles</h2>
                  <h3 className="subtitle">Bottom tile</h3>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                  <h2 className="title">{tiles.theDirector.title} </h2>
                  <h3 className="subtitle">{tiles.theDirector.sousTitre} </h3>
                  <figure className="image">
                    <Img fluid={tiles.theDirector.image.fluid} alt={tiles.theDirector.image.description} />
                  </figure>
                  <div className="content">
                    {documentToReactComponents(tiles.theDirector.corps.json)}
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <h2 className="title">Wide tile</h2>
                <h3 className="subtitle">Aligned with the right tile</h3>
                <div className="content"> contenu</div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-success">
              <div className="content">
                <h2 className="title">{tiles.history.title}</h2>
                <h3 className="subtitle">{tiles.history.sousTitre} </h3>
                {documentToReactComponents(tiles.history.corps.json)}
              </div>
            </article>
          </div>
        </div>

        <p>
        </p>
      
        <div className="column"></div>
      
      </section>
    </Layout>
  )
}

export const query = graphql`
query ($langtag: String!) {
  about:allContentfulAbout (
    filter: {
      node_locale: {eq: $langtag}
    }
  )
  {
    edges {
      node {
        tileName
        title
			  sousTitre
			  image {
          title
          description
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid
          }
        }
        corps {
          json
        }
      }
    }
  }
}`

export default AboutPage
