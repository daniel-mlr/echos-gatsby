import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SEO from '../components/seo'
import { FaTwitter, FaFacebook } from 'react-icons/fa'
import { GoMail, GoLocation} from 'react-icons/go'
import Hero from '../components/hero'
import labels from '../constants/contact'

const ContactPage = ({pageContext: { locale, langtag }, data}) => {

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

  // translation rendering helper function
  const t = (label) => labels[label][langtag]

  // data to be passed to components
  const path = '/contact'
  const seoData = {
    title: t('contact').concat(' | Les Échos du Pacifique'),
    meta: [
      { name: 'title', content: t('seoMetaTitleContent').concat(' | Les Échos') },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://res.cloudinary.com/danielmeilleurimg/image/upload/v1571988978/echos/hero/og_echos_blog.jpg' }
    ],
    description: t('seoDescription'),
    locale,
    path
  }
  const layoutData = {path, locale, langtag}

  return (
    <Layout {...layoutData} >
      <SEO {...seoData} />
      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        alt={t('heroAlt')}
        title={'Contacts'}
      />
      <section className="section" style={{paddingTop:'1rem'}} >

        <div className="content">

          {/* message format libre */}
          {documentToReactComponents(
            data.meta.contactUsMainMessage.json,
            options)}

          {/* adresse */}
          <p className="is-italic" >
            <GoLocation />&ensp;
            <span>{data.meta.contactUsAddress1}&ensp;</span>
            <span>{data.meta.contactUsAddress2}</span>
          </p>
          {/* email */}
          <p style={{whiteSpace: 'nowrap'}}>
            <GoMail style={{transform: 'translateY(2px)'}}/>
            &ensp;<a href={'mailto:' + data.meta.email + '?subject=Site Web Les Échos du Pacifique'}>{data.meta.email}</a>
          </p>
          {/* twitter */}
          <p>
            <FaTwitter style={{ transform: 'translateY(1px)' }} />
            &ensp;
            <a
              href="https://twitter.com/ChoeurLesEchos"
              rel="noopener noreferrer"
              target="_blank">ChoeurLesEchos</a>
          </p>
          {/* Facebook */}
          <p>
            <FaFacebook style={{ transform: 'translateY(1px)' }} />
            &ensp;
            <a
              href="https://www.facebook.com/Les-Échos-du-Pacifique-216683941792717/"
              rel="noopener noreferrer"
              target="_blank">Les Échos du Pacifique</a>
          </p>

          {/* google map */}
          <div className="iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.0801774589904!2d-122.87212655582704!3d49.236969071529806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!^C13.1!3m3!1m2!1s0x5486780d09ee94ed%3A0xd5f77d68d03279d0!2s938+Brunette+Ave%2C+Coquitlam%2C+BC+V3K+1C9!5e0!3m2!1sfr!2sca!4v1565254024241!5m2!1sfr!2sca"
              width="800"
              height="600"
              frameBorder="0"
              style={{ border: 0 }}
              styles={
                [
                  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                  { elementType: 'labels.text.stroke', stylers: [{ color: '#0cc' }] },
                  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                ]
              }
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($langtag: String = "fr-CA"){
    meta:contentfulMetadata (node_locale: {eq: $langtag}) {
      contactUsAddress1
      contactUsAddress2
      contactUsMainMessage {
        json
      }
      email
    }
    file(name: {eq: "water-1920x592"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1366) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `

export default ContactPage
