import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import PropTypes from 'prop-types'

// TODO: create  a login form to access data on this page
const Members = ({pageContext: { locale, langtag }}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMembres (
        filter : {node_locale: {eq: "en-US"}}
      )
        {
        edges {
          node {
            titre
            updatedAt(formatString: "MMM Do, YYYY")
            slug
          }
        }
      }
    }`
  )

  return (
    <Layout path="/members" locale={locale} langtag={langtag}>
      <section className="section">
        <h3 className="title is-size-3">Informations pour les membres</h3>
        <ul>
          {
            data.allContentfulMembres.edges.map((edge, id) => {
              return (
                <li key={id}>
                  <Link to={`/members/${edge.node.slug}`} >
                    {edge.node.titre}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </section>
    </Layout>
  )
}

// members.propTypes = {
// }

export default Members
