import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
// import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import Head from '../components/head'
// import SEO from '../components/seo'
import Helmet from 'react-helmet'
// import Hero from '../components/hero'

export const queryMembers = graphql`
  query ($slug: String!) {
    contentfulMembres(slug: {eq: $slug}) {
      titre
      updatedAt(formatString: "MMMM Do, YYYY")
      slug
      contenu { json }
    }
  }
`
const Members = ({pageContext: { locale, langtag }, data}) => {

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

  // console.log('dans templates members, dans la fonction Members, data ', data)
  return (
    <Layout
      path={`/members/${data.contentfulMembres.slug}`}
      locale={locale}
      langtag={langtag}
    >
      {/* <Head title={data.contentfulMembres.titre} /> */}
      {/* <SEO title={data.contentfulMembres.titre} /> */}
      {/* <Helmet
        title={data.contentfulMembres.titre}
        meta={{name: 'robots', content: 'noindex,nofollow'}}
      /> */}
      <Helmet>
        <title>{data.contentfulMembres.titre}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      {/* <Hero
        imgFluid={data.file.childImageSharp.fluid}
        // title={data.contentfulBlogues.titre}
      /> */}

      <section className="section" style={{'paddingTop': 0}}>
        <div className="content">
          <div className={''} >
            <article className={''} >
              <div className="tags">
                <Link
                  className="tag is-primary"
                  to={'/members'}>Liste des articles
                </Link>
                <Link className="tag" to={'/'}>Accueil</Link>
              </div>

              {/* <header>
                <h2>{data.contentfulMembres.titre}</h2>
              </header> */}
              {documentToReactComponents(
                data.contentfulMembres.contenu.json, options
              )}

              <div className="tags">
                <Link
                  lassName="tag is-primary"
                  to={'/members'}>Liste des articles
                </Link>
                <Link className="tag" to={'/'}>Accueil</Link>
              </div>
            </article>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default Members