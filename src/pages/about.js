import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import AboutTile from '../components/aboutTile'

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
            <AboutTile 
              className="tile is-child notification has-background-grey-lighter"
              {...tiles.theChoir}
            />
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <AboutTile 
                  className="tile is-child notification is-primary"
                  {...tiles.rehearsals}
                />
                <AboutTile
                  className="tile is-child notification is-warning"
                  {...tiles.example2}
                />
              </div>
              <div className="tile is-parent">
                <AboutTile
                  className="tile is-child notification is-info"
                  {...tiles.theDirector}
                />
              </div>
            </div>
            <div className="tile is-parent">
              <AboutTile
                className="tile is-child notification is-danger"
                {...tiles.example1}
              />
            </div>
          </div>
          <div className="tile is-parent content">
            <AboutTile
              className="tile is-child notification is-success"
              {...tiles.history}
            />
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