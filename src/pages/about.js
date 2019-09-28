import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Hero from '../components/hero'
import AboutTile from '../components/aboutTile'
import labels from '../constants/about'

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

  // adding locale to tiles elements (not needed with LocalisedLink)
  // Object.keys(tiles).forEach(key => {
  //   let value = tiles[key]
  //   value.locale = locale === 'en' ? locale : ''
  // })

  console.log('tiles:', tiles)

  return (
    <Layout path="/about" locale={locale} langtag={langtag}>
      <Head title="About"/>
      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        title={labels.about[langtag]}
      />
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
                  {...tiles.theAssistant}
                />
                <AboutTile
                  className="tile is-child notification is-primary"
                  {...tiles.collaboration}
                />
              </div>
              <div className="tile is-parent is-vertical">
                <AboutTile
                  className="tile is-child notification is-info"
                  {...tiles.theDirector}
                />
                <AboutTile
                  className="tile is-child notification is-danger"
                  {...tiles.thePianist}
                />
              </div>
            </div>
            {/* <div className="tile is-parent">
                <AboutTile
                  className="tile is-child notification is-primary"
                  {...tiles.collaboration}
                />
            </div> */}
          </div>
          <div className="tile is-parent">
            <AboutTile
              className="tile is-child notification content is-success"
              {...tiles.history}
            />
          </div>
        </div>

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
        linkAddress
        linkText
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
}`

export default AboutPage