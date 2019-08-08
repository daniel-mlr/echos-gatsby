import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import Style from './contact.module.scss'
import { FaTwitter } from 'react-icons/fa'
import { GoMail, GoLocation} from 'react-icons/go'
import Hero from '../components/hero'

const ContactPage = ({pageContext: { locale, langtag }}) => {
  const data = useStaticQuery(graphql`
  query {
    meta:contentfulMetadata (node_locale: {eq: "fr-CA"}) {
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
  `)
  console.log('@@@ data :', data)
  
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

  return (
    <Layout path="/contact" locale={locale} langtag={langtag}>
      <Head title="Contact" />
      <Hero
        imgFluid={data.file.childImageSharp.fluid}
        title={'Contacts'}
      />
      <section className="section" style={{paddingTop:'1rem'}} >
        <div className="columns">
          <div className="column"></div>
          <div className="column is-four-fifths">
            <h2 className="title is-3">Contactez-nous</h2>
            <div className="content" >

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

              {/* google map */}
              <div className={Style.iframeContainer} >
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
          </div>
          <div className="column"></div>
        </div>

      </section>
    </Layout>
  )
}
export default ContactPage
