import React from 'react'
import { graphql } from 'gatsby'
import LocalizedLink from '../components/localizedLink'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Hero from '../components/hero'
import labels from '../constants/blogs'

const Blog = ({pageContext: { locale, langtag }, data}) => {

  // translation rendering helper function
  const t = (label) => labels[label][langtag]

  const options = {
    renderNode: {

      // eslint-disable-next-line react/display-name
      'embedded-asset-block': (node) => {
        // there is no default language for media, hence we
        // must restrict editors to only one version of images
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      },
    }
  }

  const path=`/blog/${data.blog.slug}`

  const seoData = {
    title: data.blog.titre.concat(' | Les Échos du Pacifique'),
    meta: [
      { name: 'title', content: t('seoMetaTitleContent').concat(' | Les Échos') },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://res.cloudinary.com/danielmeilleurimg/image/upload/v1571988978/echos/hero/og_echos_blog.jpg' }
    ],
    description: data.blog.seoDescription,
    locale,
    path
  }


  return (
    <Layout
      path={`/blog/${data.blog.slug}`}
      locale={locale} langtag={langtag}
    >
      {/* <SEO title={data.blog.titre} /> */}
      <SEO {...seoData} />

      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        alt={t('heroImgAlt')}
        // title={data.contentfulBlogues.titre}
      />

      <section className="section" style={{'paddingTop': 0}}>
        <div className="content">

          <article className={''} >

            {/* navigation */}
            <div className="tags">
              <LocalizedLink
                className="tag is-primary"
                to={'/blog'}
              >{t('seeAllNews')}</LocalizedLink>
              <LocalizedLink className="tag" to={'/'}>
                {t('goHome')}</LocalizedLink>
            </div>
            
            {/* publication date */}
            <header className="content">
              <h1 className="is-size-3">{data.blog.titre}</h1>
              <p className="is-italic">
                {data.blog.publicationDate}
              </p>
            </header>
            
            {/* blog summary */}
            <div className="box is-italic is-family-secondary">
              {data.blog.summary.summary}
            </div>
            
            {/* thumbnail image */}
            <div 
              className="content is-pulled-left"
              style={{margin: '0 2rem 2rem 0'}}
            >
              <Img
                fixed={data.blog.previewPicture.fixed}
                alt={data.blog.previewPicture.description}
              />
            </div>
            
            {/* whole blog item */}
            {documentToReactComponents(
              data.blog.body.json, options)}
              
            {/* navigation */}
            <div className="tags">
              <LocalizedLink
                className="tag is-primary"
                to={'/blog'}
              >{t('seeAllNews')}</LocalizedLink>
              <LocalizedLink className="tag" to={'/'}>
                {t('goHome')}</LocalizedLink>
            </div>

          </article>
        
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
    blog:contentfulBlogues(
      slug: {eq: $slug}
      node_locale: {eq: $langtag}
    ) {
      titre
      publicationDate(formatString: "MMMM Do, YYYY")
      slug
      body { json }
      summary { summary }
      previewPicture {
        title
        description
        fixed(width: 150, height:150) {
          ...GatsbyContentfulFixed
        }
      }
      seoDescription
    }
    # file(name: {eq: "noel_tricities-1920x592"}) {
    file(name: {eq: "Choir_groupshot-2"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1366) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Blog